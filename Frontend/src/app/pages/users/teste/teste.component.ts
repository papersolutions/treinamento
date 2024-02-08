import { Component, Inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../models/user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../http/services/user/user.service';


@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  providers: [UserService],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  @Input() dataSource: any[] = [];
usuario = {} as User;
//@Input() dataSource: any[] = [];
//@Input() valorToDisplay: string[] = [];

constructor(private teste : UserService) {
}


criacaoUsuario() {
  console.log("Criação de Usuario: ");
  this.teste.createUser(this.usuario).then(
    promise => promise.subscribe(
    response => console.log("Usuario criado:", response)
    )
  )
}


}

