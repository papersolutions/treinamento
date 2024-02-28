import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../../http/services/aplicacoes/app.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Aplicacoes } from '../../models/aplicacoes';
import { SelecteTableComponent } from '../buttons/app-table.component';

@Component({
  selector: 'app-deletar',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, SelecteTableComponent],
  templateUrl: './app-delete.component.html',
  providers: [AppService],
  styleUrls: ['./app-delete.component.css']
})
export class DeletarComponent {
  id: number = 0;
  aplicacoes: Aplicacoes = new Aplicacoes();
  arrayAplicacoes: Aplicacoes[] = [];

  constructor(private aplicacoesService: AppService) { }

  ngOnInit(): void {
    this.getAllApp();
  }

  async getAllApp() {    
    (await this.aplicacoesService.getAllAplicacoes()).subscribe({
      next: (resp) => {
        this.arrayAplicacoes = resp;
      },
      error: (error) => {
        console.error("Error retrieving applications:", error);
      }
    });
  }

  async refresh(event: any){
    console.log("chamando refresh: ");
    await this.getAllApp();
  }

}
