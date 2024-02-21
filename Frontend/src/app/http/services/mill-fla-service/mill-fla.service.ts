import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Mill } from '../../../models/mill';

@Injectable({
  providedIn: 'root'
})
export class MillService {
  private url = environment.api;
  private version = environment.version;

  private apiname = "millfla"
  constructor(private httpClient: HttpClient) { }

 async getMill(id: number) {
    return this.httpClient.get<Mill[]>(`${this.url}/${this.version}/${this.apiname}/${id}`);
  }
  
  async getAllMills() {
    return this.httpClient.get<Mill[]>(`${this.url}/${this.version}/millfla`)
  }
 
  async createMill(mill: Mill) {
    return this.httpClient.post(`${this.url}/${this.version}/${this.apiname}`, mill)
  }

  async modifyMill(mill: Mill) {
    return this.httpClient.put<Mill>(`${this.url}/${this.version}/${this.apiname}/${mill.id}`, mill);
  }
  
  async deleteMill(id: number) {
    return this.httpClient.delete(`${this.url}/${this.version}/${this.apiname}/${id}`);
  }

}
