import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PsTableComponent } from '../../components/ps/ps-table/ps-table.component';
import { UserService } from '../../http/services/user/user.service';
import { User } from '../../models/user';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-modify-flavia',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, FormsModule, MatFormFieldModule, PsTableComponent, MatInputModule, RouterLink],
  providers: [UserService],
  templateUrl: './user-modify-flavia.component.html',
  styleUrl: './user-modify-flavia.component.css'
})
export class UserModifyFlaviaComponent  {
  id: number = 0;
  user: User = new User();
  arrayUsers: User[] = [];

  constructor(private name: UserService) { }

  async buscarUsuario() {
    await this.name.getUser(this.id).then(promise => promise.subscribe(
       retorno => {
        this.arrayUsers = retorno;
        if (this.arrayUsers.length > 0) {
          console.log("Buscar: ", this.user);
        }
      },
    ));
  }

  excluirUsuario() {
    this.name.deleteUser(this.id).then(promise => promise.subscribe(() => {
      console.log('User deleted successfully');
      this.buscarUsuario();
    }));
  }
}
