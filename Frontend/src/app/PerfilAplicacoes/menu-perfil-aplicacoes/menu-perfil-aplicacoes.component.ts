import { Component } from '@angular/core';
import { PerfilAplicacoesService } from '../../http/services/perfil-aplicacoes/perfil-aplicacoes.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Aplicacoes } from '../../models/aplicacoes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-menu-perfil-aplicacoes',
  standalone: true,
  imports: [MatCheckboxModule, MatExpansionModule, MatListModule, MatToolbarModule, MatMenuModule, CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink],
  providers: [PerfilAplicacoesService],
  templateUrl: './menu-perfil-aplicacoes.component.html',
  styleUrl: './menu-perfil-aplicacoes.component.css'
})
export class MenuPerfilAplicacoesComponent {
  aplicacoes: Aplicacoes[] = [];
  selectedPanel: string = '';
  selectAllFabr = false;
  selectAllUser = false;
  selectAllMenu = false;
  
  togglePanel(panel: string) {
    if (this.selectedPanel === panel) {
      this.selectedPanel = '';
    } else {
      this.selectedPanel = panel;
    }
  }

  selectAllChildren(panel: string) {
  }
  
  deselectAllChildren(panel: string) {

  }
  
}
