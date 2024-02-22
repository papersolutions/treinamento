import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MillEdu } from '../../../models/milledu';


@Injectable({
  providedIn: 'root'
})
export class MillEduService {
  private url = environment.api;
  private version = environment.version;

  constructor(private httpClient: HttpClient) { }

  async getMillEduAllUsers() {
    return this.httpClient.get<MillEdu[]>(`${this.url}/${this.version}/milleduardo`)
  }

  async getMillEdu(id: number) {
    return this.httpClient.get<MillEdu[]>(`${this.url}/${this.version}/milleduardo/${id}`);
  }

  async createMillEdu(mill: MillEdu) {
    return this.httpClient.post(`${this.url}/${this.version}/milleduardo/`, mill);
  }

  async modifyMillEdu(mill: MillEdu) {
    return this.httpClient.put<MillEdu[]>(`${this.url}/${this.version}/milleduardo/${mill.id}`, mill);
  }

  async deleteMillEdu(id: number) {
    return this.httpClient.delete<MillEdu[]>(`${this.url}/${this.version}/milleduardo/${id}`);
  }
  
}
