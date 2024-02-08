import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PsTableComponent } from '../components/ps/ps-table/ps-table.component';
import { UserService } from '../http/services/user/user.service';
import { User } from '../models/user';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-modify',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, FormsModule, MatFormFieldModule, PsTableComponent, MatInputModule],
  providers: [UserService],
  templateUrl: './user-modify.component.html',
  styleUrl: './user-modify.component.css'
})
export class UserModifyComponent {
  id: number = 0;
  user: User = new User();
  arrayUsers: User[] = [];

  async buscarUsuario() {
    await this.name.getUser(this.id).then(promise => promise.subscribe(retorno => this.arrayUsers = retorno));
  };

  excluirUsuario() {
    this.arrayUsers = [];
    this.name.deleteUser(this.id).then(promise => promise.subscribe(() => {
      console.log('User deleted successfully');
    }));
  }
  constructor(private name: UserService) {
  }
}
