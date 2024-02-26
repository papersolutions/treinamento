import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AppService } from '../../http/services/aplicacoes/app.service';

@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink],
  providers: [AppService],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css'
})
export class AppMenuComponent {

}
