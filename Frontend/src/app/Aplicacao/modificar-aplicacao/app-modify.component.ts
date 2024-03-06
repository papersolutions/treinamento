import { Component, OnInit, Signal, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppService } from '../../http/services/aplicacoes/app.service';
import { Aplicacoes } from '../../models/aplicacoes';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-modify-aplicacao',
  standalone: true,
  imports: [MatCheckboxModule ,MatButtonModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, RouterLink, MatSelectModule],
  providers: [AppService],
  templateUrl: './app-modify.component.html',
  styleUrl: './app-modify.component.css'
})
export class ModificarAplicacaoComponent implements OnInit {
  App: Aplicacoes = new Aplicacoes();
  id: number = 0;
  idParent: number = 0;
  arrayApp: Aplicacoes[] = [];
  showUpdateForm: boolean = false;
  selectedApp: Aplicacoes = new Aplicacoes();
  originalApp: Aplicacoes = new Aplicacoes();
  selected: boolean = true;

  constructor(private appService: AppService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.buscar();
    });
  }

  async buscar() {
    await this.appService.getAplicacao(this.id).then(promise => promise.subscribe({
      next: (retorno) => {
        this.arrayApp = retorno;
        if (this.arrayApp.length > 0) {
          this.selectedApp = this.arrayApp[0];
          this.showUpdateForm = false;
          console.log("Buscar: ", this.selectedApp);
        }
      }
    }));
  }

  async modifyApp() {
    this.selectedApp.id = this.id;
    console.log("Updating: ", this.selectedApp);
    await (await this.appService.modifyAplicacao(this.selectedApp)).subscribe(() => {
      console.log('App updated successfully');
      this.showUpdateForm = false;
      this.buscar();
    });
  }
}
