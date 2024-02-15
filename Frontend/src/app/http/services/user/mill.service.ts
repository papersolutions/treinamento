import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Mill } from '../../../models/mill';

@Injectable({
  providedIn: 'root'
})
export class MillService {
  private url = environment.api;
  private version = environment.version;

  constructor(private httpClient: HttpClient) {}

  async getMill(id: number) {
    return this.httpClient.get<Mill>(`${this.url}/${this.version}/mill/${id}`);
  }

  async createMill(mill: Mill) {
    return this.httpClient.post(`${this.url}/${this.version}/mill`, mill);
  }

  async modifyMill(mill: Mill) {
    return this.httpClient.put(`${this.url}/${this.version}/mill/${mill.id}`, mill);
  }

  async deleteMill(id: number) {
    return this.httpClient.delete(`${this.url}/${this.version}/mill/${id}`);
  }

  async searchMill(query: string) {
    return this.httpClient.get<Mill[]>(`${this.url}/${this.version}/mill/search?q=${query}`);
  }
}
