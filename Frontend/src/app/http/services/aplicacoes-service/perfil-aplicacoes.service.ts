import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PerfilAplicacoes } from '../../../models/perfil-aplicacoes';

@Injectable({
  providedIn: 'root'
})
export class PerfilAplicacoesService {
  private baseUrl = 'https://localhost:5001/api/perfilaplicacoes';

  constructor(private httpClient: HttpClient) { }

  private url = environment.api;
  private version = environment.version;

  private apiname = "aplicacoes"

  async getApi(id: number) {
    return this.httpClient.get<PerfilAplicacoes[]>(`${this.url}/${this.version}/${this.apiname}/${id}`);
  }

}