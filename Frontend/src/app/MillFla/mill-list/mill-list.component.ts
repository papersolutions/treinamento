import { Component, OnInit } from '@angular/core';
import { PsTableComponent } from '../../components/ps/ps-table/ps-table.component';
import { Mill } from '../../models/mill';
import { RouterLink } from '@angular/router';
import { MillService } from '../../http/services/mill-fla-service/mill-fla.service';

@Component({
  selector: 'app-mill-list',
  standalone: true,
  imports: [PsTableComponent, RouterLink],
  providers: [MillService],
  templateUrl: './mill-list.component.html',
  styleUrl: './mill-list.component.css'
})
export class MillListComponent implements OnInit {
  mill: Mill = new Mill();
  arrayMill: Mill[] = [];

  constructor(private millService: MillService) { }

  async getAllMill() {
    (await this.millService.getAllMills()).subscribe({
      next: (resp) => { this.arrayMill = resp }
    })
  }
  
  async ngOnInit() {
    await this.getAllMill();
  }
}
