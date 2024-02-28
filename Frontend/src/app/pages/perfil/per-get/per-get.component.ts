import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { PerfilService } from '../../../http/services/perfil/perfil.service';
import { Perfil } from '../../../models/perfil';

@Component({
  selector: 'app-per-get',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatFormField, MatLabel, FormsModule, MatButtonModule, ReactiveFormsModule, MatInputModule, CommonModule, RouterLink, MatSelectModule,],
  providers: [PerfilService],
  templateUrl: './per-get.component.html',
  styleUrl: './per-get.component.css'
})
export class PerGetComponent {

  isAtivo: boolean = false
  isBuscar : boolean = false;

  id: number = 0;

  arrayUsuario: Perfil[] = [];

  usuario = {} as Perfil;

  constructor(public perfil: PerfilService) {
  }

  async buscarUsuario() {
    //console.log(this.arrayUsers);
    this.isAtivo = true;
    

    console.log(this.usuario);
    console.log(this.id);
    
    await this.perfil.getPerfil(this.id).then(
      promise => promise.subscribe(res => this.usuario = res[0])
    )
    if (this.usuario.id == undefined) {
      console.log("é falso");
      //this.isBuscar = false;
    }
    else {
      console.log("é verdadeiro");
    //  this.isBuscar = true;
      this.usuario.id = '';
      this.usuario.descricao = '';
      this.usuario.nome = '';
      this.usuario.isAdmin = false;
      
    
    }



  }


}
