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

interface Menu {
  name: string;
  link: string;
  children?: Menu[];
}

@Component({
  selector: 'app-gerenciar-perfil-apliocacoes',
  standalone: true,
  imports: [RouterLink, MatCheckboxModule, MatExpansionModule, MatListModule, MatToolbarModule, MatMenuModule, CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTreeModule],
  providers: [PerfilService, PerfilAplicacoesService],
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

  constructor(
    private perfilAplicacoesService: PerfilAplicacoesService,
    private aplicacoesService: AppService,
    private perfilService: PerfilService,
  ) { }

  hasChild = (_: number, node: Menu) => !!node.children && node.children.length > 0;

  
  ngOnInit(): void {
    this.getAllApp();
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
                        .map(p => ({ name: p.nome, link: p.command}))
        }));
        console.log('menus: ', menus);

         this.dataSource.data = menus;
      },
    });
  }

  async selectPanel(panel: string) {
    this.selectedPanel = panel;
    console.log(this.selectedPanel);

    if (this.selectedPanel == 'menu') {
      await this.perfilAplicacoesService.getPerfilAplicacoes(this.id);
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


