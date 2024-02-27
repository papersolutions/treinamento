import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Perfil } from '../../../models/perfil';
import { PerfilService } from '../../../http/services/perfil/perfil.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-per-ins',
  standalone: true,
  imports: [MatCard, MatCardModule, MatInputModule, MatFormField, MatSelectModule, MatButtonModule, FormsModule, MatFormFieldModule, RouterLink, CommonModule, MatCheckboxModule,],
  providers: [PerfilService],
  templateUrl: './per-ins.component.html',
  styleUrl: './per-ins.component.css'
})
export class PerInsComponent {
  isAdicionado : boolean = false;
  usuario = {} as Perfil;
  isAdmin : boolean = false;
  constructor(public perfil: PerfilService) {
  }

  criacaoUsuario() {
    //console.log("Criação de Usuario: ");
    //console.log(this.usuario.millID)
    //console.log(this.usuario.shortName)
    //console.log(this.usuario);
    //console.log(this.usuario.isAdmin);

    this.usuario.isAdmin = this.isAdmin;
    this.perfil.createPerfil(this.usuario).then(
      promise => promise.subscribe(
        response => console.log("Usuario criado:", response)
      )
    )
    this.isAdicionado = true;
    this.usuario.nome = '';
    this.usuario.descricao = '';
    this.isAdmin = false;
      }

}
