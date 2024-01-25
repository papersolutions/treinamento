import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButton, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
