import { Component, Input } from '@angular/core';
import { MillEduService } from '../../http/services/user/milledu.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MillEdu } from '../../models/milledu';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mill-edu-ins',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatCard, MatButton, RouterLink],
  providers: [MillEduService],
  templateUrl: './mill-edu-ins.component.html',
  styleUrl: './mill-edu-ins.component.css'
})
export class MillEduInsComponent {
  //@Input() dataSource: any[] = [];
  usuario = {} as MillEdu;
  //@Input() dataSource: any[] = [];
  //@Input() valorToDisplay: string[] = [];

  constructor(public milledu: MillEduService) {
  }
  
  criacaoUsuario() {
    //console.log("Criação de Usuario: ");
    //console.log(this.usuario.millID)
    //console.log(this.usuario.shortName)
    //console.log(this.milledu.shortname);
    this.milledu.createMillEdu(this.usuario).then(
      promise => promise.subscribe(
        response => console.log("Usuario criado:", response)
      )
    )

  }
}
