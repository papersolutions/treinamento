import { Component } from '@angular/core';
import { PerfilService } from '../../../http/services/perfil/perfil.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PsTableComponent } from '../../../components/ps/ps-table/ps-table.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Perfil } from '../../../models/perfil';

@Component({
  selector: 'app-per-get-all',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PsTableComponent, MatCardModule, RouterLink, MatButtonModule,],
  providers: [PerfilService],
  templateUrl: './per-get-all.component.html',
  styleUrl: './per-get-all.component.css'
})
export class PerGetAllComponent {

  title = 'Listão Geral Mill';
  usuario: Perfil[] = [];

  constructor(public perfil: PerfilService) {
    this.buscarTodosUsuarios();
  }

  async buscarTodosUsuarios() {
    console.log(this.perfil.getPerfilAllUsers());
    await this.perfil.getPerfilAllUsers().then(
      promise => promise.subscribe(response => this.usuario = response)
    )
  }

}
