import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { Aplicacoes } from '../../models/aplicacoes';
import { AppService } from '../../http/services/aplicacoes/app.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-selecte-table',
  standalone: true,
  imports: [RouterLink, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, SelecteTableComponent, MatIconModule, RouterLink, MatTableModule, CommonModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './app-table.component.html',
  providers: [AppService],
  styleUrl: './app-table.component.css'
})
export class SelecteTableComponent {
  @Input() dataSource: any[] = [];
  @Input() title = '';
  @Input() columnsToDisplay: string[] = [];
  arrayAplicacoes: Aplicacoes[] = [];
  id: number = 0;
  @Output() DeleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private aplicacoesService: AppService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  editClick(row: any) {
    console.log(row);
    this.router.navigate(["/modificar-aplicacao", row.id]);
  }

  openConfirmationDialog(row: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Are You Sure?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteClick(row);
      }
    });
  }

  deleteClick(row: any) {
    this.aplicacoesService.deleteAplicacao(row.id).then(promise => promise.subscribe(() => {
      this.DeleteEvent.emit(null);
    }));
  }

  // Usado para chamar uma propriedade na room
  // get getHeaderColumns(): string[] {
  //   return ['select', ...this.columnsToDisplay];
  // }

  // get getRowColumns(): string[] {
  //   return ['select', ...this.columnsToDisplay];
  // }
}
