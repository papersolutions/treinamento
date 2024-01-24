import { HttpClient } from '@angular/common/http';
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
    console.log(`${this.url}/${this.version}/user`)
    return this.httpClient.get<User[]>(`${this.url}/${this.version}/user`)
  }

}
