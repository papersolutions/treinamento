import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../confirmation-dialog/confirmation-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ps-table',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatPaginatorModule, MatIconModule, MatButtonModule],
  templateUrl: './ps-table.component.html',
  styleUrl: './ps-table.component.css'
})
export class PsTableComponent {
  @Input() dataSource: any[] = [];
  @Input() title = '';
  @Input() columnsToDisplay: string[] = [];

  constructor(private dialog: MatDialog) { }

  openConfirmationDialog(element: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Are You Sure?' }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Deleting item:', element);
      }
    });
  }
}