import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { PsTableComponent } from '../../components/ps/ps-table/ps-table.component';
import { AppService } from '../../http/services/aplicacoes/app.service';
import { Aplicacoes } from '../../models/aplicacoes';

@Component({
  selector: 'app-app-list',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, PsTableComponent],
  templateUrl: './app-list.component.html',
  providers: [AppService],
  styleUrl: './app-list.component.css'
})
export class AppListComponent implements OnInit{
  id: number = 0;
  aplicacoes: Aplicacoes = new Aplicacoes();
  arrayAplicacoes: Aplicacoes[] = [];
  
  constructor(private aplicacoesService: AppService) { }

  ngOnInit(): void {
    this.getAllApp();
  }
  
  async getAllApp() {
    console.log("Getting all applications...");
    (await this.aplicacoesService.getAllAplicacoes()).subscribe({
      next: (resp) => { 
        console.log("Applications retrieved:", resp); 
        this.arrayAplicacoes = resp;
      },
      error: (error) => {
        console.error("Error retrieving applications:", error);
      }
    });
  }
}
