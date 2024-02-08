import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PsTableComponent } from '../../../components/ps/ps-table/ps-table.component';
import { UserService } from '../../../http/services/user/user.service';
import { User } from '../../../models/user';
import { TesteComponent } from '../teste/teste.component';


@Component({
  selector: 'app-users-modify',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, PsTableComponent, TesteComponent, ReactiveFormsModule,],
  providers:[UserService],
  templateUrl: './users-modify.component.html',
  styleUrl: './users-modify.component.css'
})


export class UsersModifyComponent {

 id: number = 0;
 
 arrayUsers: User[] = [];
 
 users = {} as User;

 constructor(private name : UserService) {
}

async buscarUsuario() {
  //  console.log(this.arrayUsers);
  //  console.log(this.id);
   this.name.getUser(this.id).then(
        promise => promise.subscribe(res => this.users = res[0])
      )
    
 }

  async excluirUsuario() {
    console.log(this.id);
    this.name.deleteUser(this.id);
   }
   

  async alterarUsuario()
  {
    await this.name.modifyUser(this.users).then(
    promise => promise.subscribe(res => console.log("Usuário alterado: ", res)
    )
    )
    this.buscarUsuario();
    
  }


}