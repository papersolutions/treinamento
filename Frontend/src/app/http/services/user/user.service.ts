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

  getAllUsers()
  {
    return this.httpClient.get<User[]>(`${this.url}/${this.version}/user`)
  }

  getUser(id:number)
  {
    return this.httpClient.get<User>(`${this.url}/${this.version}/user/${id}`)
  }

  createUser(user: User)
  {
    return this.httpClient.post<User>(`${this.url}/${this.version}/user`, user)
  }

  modifyUser(user: User)
  {
    return this.httpClient.put<User>(`${this.url}/${this.version}/user/${user.id}`, user)
  }



}
