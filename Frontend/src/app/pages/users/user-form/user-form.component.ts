import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../http/services/user/user.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
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

  async buscarUsuario(id: number)
  {
    await this.userService.getUser(id).then( 
    promise => promise.subscribe(res => this.user = res[0])
    )
  }

  async criarUsuario()
  {
    await this.userService.createUser(this.user).then(
    promise => promise.subscribe(
      response => console.log("Usuário Criado: ", response)
    )
    );
  }

  async alterarUsuario()
  {
    await this.userService.modifyUser(this.user).then(
    response => response.subscribe(
    res => console.log("Usuário alterado: ", res)
    )
    )
  }
}

