import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ps-table',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './ps-table.component.html',
  styleUrl: './ps-table.component.css'
})
export class PsTableComponent {
  @Input() data: User[] = [];
  @Input() title = '';
  columnsToDisplay: string[] = ['id', 'name', 'login', 'created','modified'];
}
