import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-mill-edu-ps-table',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatPaginatorModule],
  templateUrl: './mill-edu-ps-table.component.html',
  styleUrl: './mill-edu-ps-table.component.css'
})
export class MillEduPsTableComponent {
  @Input() dataSource: any[] = [];
  @Input() title = '';
  @Input() columnsToDisplay: string[] = [];


}
