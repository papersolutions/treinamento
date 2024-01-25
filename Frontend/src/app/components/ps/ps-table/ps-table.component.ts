import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-ps-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './ps-table.component.html',
  styleUrl: './ps-table.component.css'
})
export class PsTableComponent {
  @Input() data: User[] = [];
  columnsToDisplay: string[] = ['id', 'name', 'login', 'created','modified'];
}
