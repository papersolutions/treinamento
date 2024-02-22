import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MillService } from '../../http/services/mill-fla-service/mill-fla.service';
import { Mill } from '../../models/mill';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { PsTableComponent } from '../../components/ps/ps-table/ps-table.component';

@Component({
  selector: 'app-mill-fla-insert',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, MatTableModule, CommonModule, PsTableComponent],
  templateUrl: './mill-fla-insert.component.html',
  providers: [MillService],
  styleUrl: './mill-fla-insert.component.css'
})
export class MillFlaInsertComponent implements OnInit {
  id: number = 0;
  mill: Mill = new Mill();
  arrayMill: Mill[] = [];

  constructor(private millService: MillService) { }

  async ngOnInit() {
    await this.getAllMill();
  }

  async createMill() {
    console.log("Mill Criada: ");
    (await this.millService.createMill(this.mill)).subscribe({
      next: (resp) => {
        console.log(resp);
        this.getAllMill();
      }
    });
    this.mill.shortName = '';
    this.mill.millID = '';

  }

  async getAllMill() {
    (await this.millService.getAllMills()).subscribe({
      next: (resp) => { this.arrayMill = resp }
    })
  }
}