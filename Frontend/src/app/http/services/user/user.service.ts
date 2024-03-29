import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.api;
  private version = environment.version;

  constructor(private httpClient: HttpClient) { 
  }

  async getAllUsers()
  {
    return this.httpClient.get<User[]>(`${this.url}/${this.version}/user`)
  }

  async getUser(id:number)
  {
    return this.httpClient.get<User[]>(`${this.url}/${this.version}/user/${id}`)
  }

  async createUser(user: User)
  {
    return this.httpClient.post<User>(`${this.url}/${this.version}/user`, user)
  }

  async modifyUser(user: User)
  {
    return this.httpClient.put<User>(`${this.url}/${this.version}/user/${user.id}`, user)
  }
  
  async deleteUser(id: number)
  {
    return this.httpClient.delete<User>(`${this.url}/${this.version}/users/${id}`)
  }

  async userByEmail(username?: string)
  {
    return this.httpClient.get<User>(`http://localhost:5109/v1/userByUsername/${username}`)
  }

}
