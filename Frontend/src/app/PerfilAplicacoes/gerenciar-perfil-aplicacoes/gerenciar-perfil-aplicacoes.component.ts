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

interface Menu {
  name: string;
  link: string;
  children?: Menu[];
}

@Component({
  selector: 'app-gerenciar-perfil-apliocacoes',
  standalone: true,
  imports: [MatCheckboxModule, MatExpansionModule, MatListModule, MatToolbarModule, MatMenuModule, CommonModule, FormsModule,  MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, RouterLink, MatRadioModule, MatSelectModule, MatTreeModule],
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
  selectedNodes: any[] = [];
  perfilVar = {} as Perfil;
  arrayperfilVar: Perfil[] = [];
  selectedPerfil: any = null;

  selectPerfil(perfil: any) {
    this.selectedPerfil = perfil;
  }
  
  exemplo: any;
  constructor(
    private perfilAplicacoesService: PerfilAplicacoesService,
    private aplicacoesService: AppService,
    private perfilService: PerfilService,
  ) { }

  hasChild = (_: number, node: Menu) => !!node.children && node.children.length > 0;


  async ngOnInit() {
    this.getAllApp();
    await this.perfilService.getPerfilAllUsers().then(
      promise => promise.subscribe(response => this.arrayperfilVar = response)
       )
  }

  async getAllApp() {
    console.log("Getting all applications...");
    (await this.aplicacoesService.getAllAplicacoes()).subscribe({
      next: (resp) => {
        console.log("Applications retrieved:", resp);

        let menus = resp.filter(app => app.idParent == null).map(app => ({
          name: app.nome,
          link: app.command,
          children: resp.filter(parent => parent.idParent == app.id)
            .map(p => ({ name: p.nome, link: p.command }))
        }));
        console.log('menus: ', menus);

        this.dataSource.data = menus;
      },
    });
  }

  selectPanel(panel: string) {
    if (this.selectedPerfil) {
      this.selectedPanel = panel;
    }
  }

  selectNode(node: any): void {
    if (this.isSelected(node)) {
      this.selectedNodes = this.selectedNodes.filter(selectedNode => selectedNode !== node);
      this.treeControl.getDescendants(node).forEach(child => {
        this.selectedNodes = this.selectedNodes.filter(selectedNode => selectedNode !== child);
      });
    } else {
      this.selectedNodes.push(node);
      this.treeControl.getDescendants(node).forEach(child => {
        this.selectedNodes.push(child);
      });
    }
  }

  isSelected(node: any): boolean {
    return this.selectedNodes.includes(node);
  }
}


