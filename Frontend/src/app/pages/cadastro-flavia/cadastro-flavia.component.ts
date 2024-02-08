import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../models/user';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../http/services/user/user.service';

@Component({
  selector: 'app-cadastro-flavia',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule],
  providers: [UserService],
  templateUrl: './cadastro-flavia.component.html',
  styleUrl: './cadastro-flavia.component.css'
})
export class CadastroFlaviaComponent {
  user = {} as User;

  constructor(private userService: UserService) {
  }


  async criarUsuario() {
    console.log("Criação de Usuário: ");
    (await this.userService.createUser(this.user)).subscribe(response => console.log("Usuario Criado: ", response));
    this.user.nome = '';
    this.user.login = '';
    this.user.senha = '';
  }

}

