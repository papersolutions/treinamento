import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Perfil } from '../../../models/perfil';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private url = environment.api;
  private version = environment.version;

  constructor(private httpClient: HttpClient) { }

  async getPerfilAllUsers() {
    return this.httpClient.get<Perfil[]>(`${this.url}/${this.version}/perfil`)
  }

  async getPerfil(id: number) {
    return this.httpClient.get<Perfil[]>(`${this.url}/${this.version}/perfil/${id}`);
  }

  async createPerfil(perfil: Perfil) {
    return this.httpClient.post(`${this.url}/${this.version}/perfil/`, perfil);
  }

  async modifyPerfil(perfil: Perfil) {
    return this.httpClient.put<Perfil[]>(`${this.url}/${this.version}/perfil/${perfil.id}`, perfil);
  }

  async deletePerfil(id: number) {
    return this.httpClient.delete<Perfil[]>(`${this.url}/${this.version}/perfil/${id}`);
  }
  
}
