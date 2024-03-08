import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PerfilAplicacoes } from '../../../models/perfil-aplicacoes';
import { accessDto } from '../../../models/dto/acessoDto';

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

  async getAcessos(idPerfil: number) {
    return this.httpClient.get<accessDto[]>(`${this.url}/api/${this.apiname}/acessosByPerfil/${idPerfil}`);
  }

 async definirAcessos(idPerfil: number, Aplicacoes: number[]) {
    return this.httpClient.post<PerfilAplicacoes[]>(`${this.url}/api/${this.apiname}/setAccess/${idPerfil}`, Aplicacoes);
  }
}