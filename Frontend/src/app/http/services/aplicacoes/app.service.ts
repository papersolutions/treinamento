import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Aplicacoes } from '../../../models/aplicacoes';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = environment.api;
  private version = environment.version;
  selectedApp: any;

  constructor(private httpClient: HttpClient) { }
  private apiname = "aplicacoes"

  async getAplicacao(id: number) {
    return this.httpClient.get<Aplicacoes[]>(`${this.url}/${this.version}/${this.apiname}/${id}`);
  }

  async getAllAplicacoes() {
    return this.httpClient.get<Aplicacoes[]>(`${this.url}/${this.version}/aplicacoes`)
  }

  async createAplicacao(mill: Aplicacoes) {
    return this.httpClient.post(`${this.url}/${this.version}/${this.apiname}`, mill)
  }

  async modifyAplicacao(mill: Aplicacoes) {
    return this.httpClient.put<Aplicacoes>(`${this.url}/${this.version}/${this.apiname}/${mill.id}`, mill);
  }

  async deleteAplicacao(id: number) {
    return this.httpClient.delete(`${this.url}/${this.version}/${this.apiname}/${id}`);
  }

}
