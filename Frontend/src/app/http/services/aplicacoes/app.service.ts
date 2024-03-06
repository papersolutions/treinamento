import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Aplicacoes } from '../../../models/aplicacoes';
import { environment } from '../../../../environments/environment';

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

  async createAplicacao(app: Aplicacoes) {
    return this.httpClient.post(`${this.url}/${this.version}/${this.apiname}`, app)
  }

  async modifyAplicacao(app: Aplicacoes) {
    console.log('meu app: ', app);
    return this.httpClient.put<Aplicacoes>(`${this.url}/${this.version}/${this.apiname}/${app.id}`, app);
  }

  async deleteAplicacao(id: number) {
    return this.httpClient.delete(`${this.url}/${this.version}/${this.apiname}/${id}`);
  }

}
