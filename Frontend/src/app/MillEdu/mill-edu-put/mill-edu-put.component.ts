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
  selector: 'app-mill-edu-put',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatFormField, MatLabel, FormsModule, MatButtonModule, ReactiveFormsModule, MatInputModule, CommonModule, RouterLink],
  providers: [MillEduService],
  templateUrl: './mill-edu-put.component.html',
  styleUrl: './mill-edu-put.component.css'
})
export class MillEduPutComponent {

  isAtivo: boolean = false
  isAlterado: boolean = false;
  isExcluir: boolean = false;

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
    this.isAtivo = true;
    this.isAlterado = false;
    this.isExcluir = false;
    console.log(this.users);
    console.log(this.id);
    

    await this.name.getMillEdu(this.id).then(
      promise => promise.subscribe(res => this.users = res[0])
    )
    
  }

  async excluirUsuario() {
    console.log(this.id);
    console.log(this.users.id);
    await this.name.deleteMillEdu(this.users.id).then(
      promise => promise.subscribe(res => this.users.id = res[0])
    )
    this.isAtivo = false;
    this.isExcluir = true;        
  }


  async alterarUsuario() {
    await this.name.modifyMillEdu(this.users).then(
      promise => promise.subscribe(res => console.log("Usuário alterado: ", res[0])
      ))
    this.isAtivo = false;
    this.isAlterado = true;
  }




}



