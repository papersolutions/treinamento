import { Component, Input } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { accessDto } from '../../../models/dto/acessoDto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ps-menu-item',
  standalone: true,
  imports: [MatTreeModule, MatIconModule, CommonModule, RouterLink],
  providers: [],
  templateUrl: './ps-menu-item.component.html',
  styleUrl: './ps-menu-item.component.css'
})
export class PsMenuItemComponent {

@Input() node = {} as accessDto;

isOpen: boolean = false;

toggle() {
  this.isOpen = !this.isOpen;
}

}
