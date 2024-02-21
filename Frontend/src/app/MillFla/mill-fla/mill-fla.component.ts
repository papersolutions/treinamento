import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MillService } from '../../http/services/mill-fla-service/mill-fla.service';
import { MillTableComponent } from '../../components/mill-table/mill-table.component';
import { Mill } from '../../models/mill';

@Component({
  selector: 'app-mill-fla',
  templateUrl: './mill-fla.component.html',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, MillTableComponent],
  providers: [MillService],
  styleUrls: ['./mill-fla.component.css']
}) export class MillFlaComponent  {
}