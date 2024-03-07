import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAplicacoesService } from '../../http/services/perfil-aplicacoes/perfil-aplicacoes.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Aplicacoes } from '../../models/aplicacoes';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { Mill } from '../../models/mill';
@Component({
  selector: 'app-gerenciar-perfil-apliocacoes',
  standalone: true,
  imports: [MatCheckboxModule, MatExpansionModule, MatListModule, MatToolbarModule, MatMenuModule, CommonModule, FormsModule,  MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink],
  providers: [PerfilAplicacoesService],
  templateUrl: './gerenciar-perfil-aplicacoes.component.html',
  styleUrl: './gerenciar-perfil-aplicacoes.component.css'
})
export class GerenciarPerfilAplicacoesComponent {
  aplicacoes: Aplicacoes[] = [];
  selectedPanel: string = '';
  checked = false;
  selectAll: boolean = false;

  selectPanel(panel: string) {
    this.selectedPanel = panel;
  }
  
  toggleSelectAll() {
    this.selectAll = !this.selectAll;
  }
  
}
