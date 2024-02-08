import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../http/services/user/user.service';
import { User } from '../../../models/user';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-user-alter',
  standalone: true,
  imports: [MatTableModule, MatCardModule,CommonModule, MatFormField, MatInputModule, FormsModule, MatButtonModule],
  providers:[UserService], 
  templateUrl: './user-alter.component.html',
  styleUrl: './user-alter.component.css'
})

export class UsersAlterComponent {
  @Input() dataSource: any[] = [];
  @Input() title = '';
  @Input() columnsToDisplay: string[] = [];
  @Input() user = {} as User;
  @Input() idChild: number = 0;
  
  arrayUsers: User[] = [];

  id: number = 0;
  constructor(private userService: UserService)
  {

  }

  async alterarUsuario()
  {
    await this.userService.modifyUser(this.user).then(
    promise => promise.subscribe(res => console.log("Usuário alterado: ", res)
    )
    )
    this.buscarUsuario();
    
  }

  async excluirUsuario() {

    console.log(this.arrayUsers);
    console.log(this.idChild);

    await this.userService.deleteUser(this.idChild).then(
      promise => promise.subscribe(
        res => console.log("Usuário Deletado: ", res)
    )
    )
   // this.buscarUsuario();
  }
  
  async buscarUsuario() {
    //  console.log(this.arrayUsers);
    //  console.log(this.id);
   await this.userService.getUser(this.id).then(
          promise => promise.subscribe(res => this.user = res[0])
        )
      
   }
}

