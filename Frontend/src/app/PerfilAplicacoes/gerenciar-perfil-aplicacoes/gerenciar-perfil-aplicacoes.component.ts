import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAplicacoesService } from '../../http/services/perfil-aplicacoes/perfil-aplicacoes.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Aplicacoes } from '../../models/aplicacoes';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Perfil } from '../../models/perfil';
import { PerfilService } from '../../http/services/perfil/perfil.service';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../../http/services/aplicacoes/app.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { PerfilAplicacoes } from '../../models/perfil-aplicacoes';
import { accessDto } from '../../models/dto/acessoDto';

interface Menu {
  name: string;
  link: string;
  id: number;
  children?: Menu[];
  checked: boolean;
}

@Component({
  selector: 'app-gerenciar-perfil-apliocacoes',
  standalone: true,
  imports: [MatCheckboxModule, MatExpansionModule, MatListModule, MatToolbarModule, MatMenuModule, CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, RouterLink, MatRadioModule, MatSelectModule, MatTreeModule],
  providers: [PerfilAplicacoesService, PerfilService],
  templateUrl: './gerenciar-perfil-aplicacoes.component.html',
  styleUrl: './gerenciar-perfil-aplicacoes.component.css'
})
export class GerenciarPerfilAplicacoesComponent implements OnInit {
  dataSource = new MatTreeNestedDataSource<Menu>();
  treeControl = new NestedTreeControl<Menu>(node => node.children);

  selectedPanel: string = '';
  id: number = 0;
  arrayAplicacoes: Aplicacoes[] = [];
  perfilVar = {} as Perfil;
  arrayperfilVar: Perfil[] = [];
  savedAcessos: PerfilAplicacoes[] = [];
  selectedPerfil: any = null;
  exemplo: any;
  savedApplicationIds: number[] = [];

  someComplete(menu: Menu): boolean {
    if (menu.children == null) {
      return false;
    }
    return menu.children.filter(t => t.checked).length > 0;
  }

  updateAllComplete(node: Menu) {
    const menu = this.dataSource.data as Menu[];
    const parent = menu.find(f => f.children?.find(t => t == node));
    if (parent != undefined) {
      parent.checked = parent.children == undefined ? false : parent.children.filter(f => f.checked).length > 0;
    }
  }

  setAll(menu: Menu, completed: boolean) {
    menu.checked = completed;
    if (menu.children == null) {
      return;
    }
    menu.children.forEach(t => (t.checked = completed));
  }

  hasChild = (_: number, node: Menu) => !!node.children && node.children.length > 0;

  constructor(
    private perfilAplicacoesService: PerfilAplicacoesService,
    private aplicacoesService: AppService,
    private perfilService: PerfilService,
  ) { }

  selectPerfil(perfil: Perfil) {
    this.selectedPerfil = perfil;
    this.loadSavedAcessos(this.selectedPerfil);
  }

  selectPanel(panel: string) {
    if (this.selectedPerfil) {
      this.selectedPanel = panel;
    }
  }

  selectNode(node: any): void {
    this.setNode(node, this.dataSource.data);
  }

  setNode(node: any, data?: Menu[]) {
    data?.forEach(
      t => {
        if (node.id == t.id) {
          if (t.children) t.children.map(m => m.checked = !m.checked);
        }
        this.setNode(node.id, t.children);
      }
    );
  }

  getNode(data?: Menu[]): any[] {
    var result: any[] = [];
    data?.forEach(
      t => {
        if (t.checked) {
          result.push(t.id);
        }
        if (t.children) {
          this.getNode(t.children).forEach(f => result.push(f));
        }
      }
    );
    return result;
  }

  async saveAcessos() {
    if (this.selectedPerfil > 0) {

      const aplicacoesIds = this.getNode(this.dataSource.data);
      console.log('AppIds: ', aplicacoesIds);
      (await this.perfilAplicacoesService.definirAcessos(this.selectedPerfil, aplicacoesIds).then(promise => promise.subscribe(resp => console.log(resp))));
      console.log('Acessos salvos com sucesso');
    }
  }

  async ngOnInit() {
    this.getAllApp();
    await this.perfilService.getPerfilAllUsers().then(
      promise => promise.subscribe(response => {
        this.arrayperfilVar = response;
      })
    );
  }

  async getAllApp() {
    (await this.aplicacoesService.getAllAplicacoes()).subscribe({
      next: (resp) => {
        console.log("Applications:", resp);

        let menus = resp.filter(app => app.idParent == 0).map(app => ({
          name: app.nome,
          link: app.command,
          id: app.id,
          checked: false,
          children: resp.filter(parent => parent.idParent == app.id)
            .map(p => ({ name: p.nome, link: p.command, id: p.id, checked: false }))
        }));
        console.log('menus: ', menus);
        this.dataSource.data = menus;
      },
    });
  }

  async loadSavedAcessos(perfilId: number) {
    (await this.perfilAplicacoesService.getAcessos(perfilId)).subscribe({
      next: (resp: accessDto[]) => {
        if (resp) {
          this.setSelected(resp, this.dataSource.data)
        }
      },
    });
  }

  setSelected(access: accessDto[], menu?: Menu[]) {
    if (menu == null) return;
    menu.forEach(m => {
      m.checked = access.some(a => a.idAplicacao == m.id);
      this.setSelected(access, m.children);
    })
  }
}