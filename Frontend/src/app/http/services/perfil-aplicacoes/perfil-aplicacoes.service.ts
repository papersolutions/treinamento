import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PerfilAplicacoes } from '../../../models/perfil-aplicacoes';

@Injectable({
  providedIn: 'root'
})
export class PerfilAplicacoesService {
  private url = environment.api;
  private version = environment.version;

  constructor(private httpClient: HttpClient) { }
  private apiname = "perfilAplicacoes"

  async getPerfilAplicacoes(id: number) {
    return this.httpClient.get<PerfilAplicacoes[]>(`${this.url}/${this.version}/${this.apiname}/${id}`);
  }


}