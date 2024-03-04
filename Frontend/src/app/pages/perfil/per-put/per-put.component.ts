import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { PerfilService } from '../../../http/services/perfil/perfil.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Perfil } from '../../../models/perfil';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-per-put',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatFormField, MatLabel, FormsModule, MatButtonModule, ReactiveFormsModule, MatInputModule, CommonModule, RouterLink, MatSelectModule, MatCheckboxModule],
  providers: [PerfilService],
  templateUrl: './per-put.component.html',
  styleUrl: './per-put.component.css'
})
export class PerPutComponent {

  isAtivo: boolean = false;
  isAlterado: boolean = false;
  isExcluir: boolean = false;
  isBuscar: boolean = false;

  id: number = 0;

  arrayUsuario: Perfil[] = [];

  usuario = {} as Perfil;

  constructor(public perfil: PerfilService) {
  }

  async buscarUsuario() {
    // console.log(this.arrayUsers);

    this.isAtivo = true;
    this.isAlterado = false;
    this.isExcluir = false;

    // console.log(this.usuario);
    // console.log(this.id);

    await this.perfil.getPerfil(this.id).then(
      promise => promise.subscribe(res => this.usuario = res[0])
    )
    // console.log(this.usuario);
    console.log("err:", this.id);
    console.log(this.usuario.id);

    if (await this.usuario.id == undefined) {
      console.log("é falso");
      //  this.isBuscar = false;
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

  async excluirUsuario() {
    console.log(this.id);
    console.log(this.usuario.id);
    await this.perfil.deletePerfil(this.usuario.id).then(
      promise => promise.subscribe(res => this.usuario.id = res[0])
    )
    this.isAtivo = false;
    this.isBuscar = false;
    this.isExcluir = true;
    this.usuario.id = '';
  }


  async alterarUsuario() {
    await this.perfil.modifyPerfil(this.usuario).then(
      promise => promise.subscribe(res => console.log("Usuário alterado: ", res[0])
      ))
    this.isAtivo = false;
    this.isBuscar = false;
    this.isAlterado = true;
    this.usuario.id = '';
  }
}
