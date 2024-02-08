import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-ps-table',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatPaginatorModule],
  templateUrl: './ps-table.component.html',
  styleUrl: './ps-table.component.css'
})
export class PsTableComponent {
  @Input() dataSource: any[] = [];
  @Input() title = '';
  @Input() columnsToDisplay: string[] = [];


}
