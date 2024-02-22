import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MillEdu } from '../../models/milledu';
import { MillEduService } from '../../http/services/user/milledu.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mill-edu-get',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatFormField, MatLabel, FormsModule, MatButtonModule, ReactiveFormsModule, MatInputModule, CommonModule, RouterLink],
  providers: [MillEduService],
  templateUrl: './mill-edu-get.component.html',
  styleUrl: './mill-edu-get.component.css'
})
export class MillEduGetComponent {

  isAtivo: boolean = false;

 // @Input() dataSource: any[] = [];
 // @Input() title = '';
  // @Input() columnsToDisplay: string[] = [];
  
  id: number = 0;

  arrayUsers: MillEdu[] = [];

  users = {} as MillEdu;
 
    constructor(public name: MillEduService) {
  }

  async buscarUsuario() {
    //console.log(this.arrayUsers);
    
    console.log(this.users);
    console.log(this.id);

    
    await this.name.getMillEdu(this.id).then(
      promise => promise.subscribe(res => this.users = res[0])     
    )
    this.isAtivo = true;
    console.log(this.users.millId);

  }

  async excluirUsuario() {
    console.log(this.id);
    await this.name.deleteMillEdu(this.id);
  }
}


