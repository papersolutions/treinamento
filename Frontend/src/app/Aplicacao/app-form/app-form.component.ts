import { Component, OnInit } from '@angular/core';
import { Aplicacoes } from '../../models/aplicacoes';
import { AppService } from '../../http/services/aplicacoes/app.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PsTableComponent } from '../../components/ps/ps-table/ps-table.component';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-app-form',
  standalone: true,
  imports: [ MatCheckboxModule,FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, PsTableComponent, MatSelectModule],
  templateUrl: './app-form.component.html',
  providers: [AppService],
  styleUrl: './app-form.component.css'
})
export class AppFormComponent {
  id: number = 0;
  idParent: number = 0;
  aplicacoes: Aplicacoes = new Aplicacoes();
  arrayAplicacoes: Aplicacoes[] = [];
  selected: boolean = true;
  constructor(private aplicacoesService: AppService) { }
  

  
  async createApp() {
    console.log("App Criada: ");
    (await this.aplicacoesService.createAplicacao(this.aplicacoes)).subscribe({
      next: (resp) => {
        console.log(resp);
        this.getApp();
      }
    });
    this.aplicacoes.nome = '';
    this.aplicacoes.descricao = '';
    this.aplicacoes.command = '';
  }

  async getApp() {
    (await this.aplicacoesService.getAplicacao(this.id)).subscribe({
      next: (resp) => {
        this.arrayAplicacoes.push();
        console.log(resp);
      }
    });
  }

}
