import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../http/services/user/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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
  buscarTodosUsuarios(){
    this.userService.getAllUsers().subscribe(response => this.users = response)
    console.log(this.users)
  }

}