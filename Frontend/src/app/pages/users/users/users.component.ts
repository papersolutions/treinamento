import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../http/services/user/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PsTableComponent } from '../../../components/ps/ps-table/ps-table.component';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PsTableComponent, MatCardModule, RouterLink],
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  title = 'Usuários';
  users: User[] = [];

  constructor(private userService: UserService)
  {
    this.buscarTodosUsuarios();
  }
  async buscarTodosUsuarios(){
    await this.userService.getAllUsers().then(
    promise =>promise.subscribe(response => this.users = response)
    )
  }
}
