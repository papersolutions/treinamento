import { Component, OnInit } from '@angular/core';
import { PerfilAplicacoesService } from '../../http/services/perfil-aplicacoes/perfil-aplicacoes.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PsTableComponent } from '../../components/ps/ps-table/ps-table.component';
import { PerfilAplicacoes } from '../../models/perfil-aplicacoes';

@Component({
  selector: 'app-lista-perfil-aplicacoes',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, PsTableComponent],
  providers: [PerfilAplicacoesService],  
  templateUrl: './lista-perfil-aplicacoes.component.html',
  styleUrl: './lista-perfil-aplicacoes.component.css'
})
export class ListaPerfilAplicacoesComponent implements OnInit{
  id: number = 0;
  perfilAplicacoes: PerfilAplicacoes = new PerfilAplicacoes();
  arrayPerfilAplicacoes: PerfilAplicacoes[] = [];

  constructor(private perfilAplicacoesService: PerfilAplicacoesService) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {    
    (await this.perfilAplicacoesService.getPerfilAplicacoes(this.id)).subscribe({
      next: (resp) => {
        this.arrayPerfilAplicacoes = resp;
      },
      error: (error) => {
        console.error("Error retrieving applications:", error);
      }
    });
  }

  async refresh(event: any){
    console.log("chamando refresh: ");
    await this.getAll();
  }
}
