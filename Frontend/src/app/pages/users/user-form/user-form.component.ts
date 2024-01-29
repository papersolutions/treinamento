import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../http/services/user/user.service';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  providers: [UserService],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  user = {} as User;

  constructor(private userService: UserService)
  {

  }

  submitForm()
  {
    if(this.user.id == null)
    {
      this.criarUsuario()
    }
    else {
      this.alterarUsuario()
    }
  }

  buscarUsuario(id: number)
  {
    this.userService.getUser(id).subscribe(res => this.user = res)
  }

  criarUsuario()
  {
    this.userService.createUser(this.user).subscribe(
      response => console.log("Usuário Criado: ", response)
    );
  }

  alterarUsuario()
  {
    this.userService.modifyUser(this.user).subscribe(
    response => console.log("Usuário alterado: ", response)
    );
  }
}

