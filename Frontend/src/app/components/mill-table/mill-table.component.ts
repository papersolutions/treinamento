import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MillService } from '../../http/services/mill-fla-service/mill-fla.service';

@Component({
  selector: 'app-mill-table',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule],
  providers: [MillService],
  templateUrl: './mill-table.component.html',
  styleUrl: './mill-table.component.css'
})
export class MillTableComponent {
  @Input() dataSource: any[] = [];
  @Input() title = '';
  @Input() columnsToDisplay: string[] = [];

}
