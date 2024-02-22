import { Component } from '@angular/core';
import { MillEdu } from '../../models/milledu';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MillEduPsTableComponent } from '../mill-edu-ps-table/mill-edu-ps-table.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MillEduService } from '../../http/services/user/milledu.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mill-edu-lis',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MillEduPsTableComponent, MatCardModule, RouterLink, MatButtonModule],
  providers: [MillEduService],
  templateUrl: './mill-edu-lis.component.html',
  styleUrl: './mill-edu-lis.component.css'
})
export class MillEduLisComponent {
  title = 'Listão Geral Mill';
  users: MillEdu[] = [];

  constructor(public MillEdu: MillEduService) {
    this.buscarTodosUsuarios();
  }

  async buscarTodosUsuarios() {
    console.log(this.MillEdu.getMillEduAllUsers());
    await this.MillEdu.getMillEduAllUsers().then(
      promise => promise.subscribe(response => this.users = response)
    )
  }
}
