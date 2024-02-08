import { Component, Inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { authEntity } from '../../../../models/authEntity';
import { User } from '../../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.api;
  private version = environment.version;

  constructor(private httpClient: HttpClient) {

  }

  async auth(authEntity: authEntity) {
    return this.httpClient.post<User>(`${this.url}/${this.version}/auth`, authEntity);
  }
}
