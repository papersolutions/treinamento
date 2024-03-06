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
import { MatSelectModule } from '@angular/material/select';
import { Aplicacoes } from '../../models/aplicacoes';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { Perfil } from '../../models/perfil';
import { PerfilService } from '../../http/services/perfil/perfil.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';

@Component({
  selector: 'app-gerenciar-perfil-apliocacoes',
  standalone: true,
  imports: [MatCheckboxModule, MatExpansionModule, MatListModule, MatToolbarModule, MatMenuModule, CommonModule, FormsModule,  MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, RouterLink, MatRadioModule, MatSelectModule, MatTreeModule],
  providers: [PerfilAplicacoesService, PerfilService],
  templateUrl: './gerenciar-perfil-aplicacoes.component.html',
  styleUrl: './gerenciar-perfil-aplicacoes.component.css'
})

export class GerenciarPerfilAplicacoesComponent {
  
  perfilVar = {} as Perfil;
  arrayperfilVar: Perfil[] = [];

  exemplo: any;

   constructor(public perfil: PerfilService) {

   }


  
  async ngOnInit() {
    await this.perfil.getPerfilAllUsers().then(
      promise => promise.subscribe(response => this.arrayperfilVar = response)
       )

       
   }

  
}

  
  
 
  

