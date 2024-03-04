import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalInterceptor, MsalInterceptorConfiguration, MsalModule } from '@azure/msal-angular';
import { AuthenticationResult, IPublicClientApplication, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { UserService } from './http/services/user/user.service';
import { Aplicacoes } from './models/aplicacoes';
import { AppService } from './http/services/aplicacoes/app.service';
import { PsMenuItemComponent } from './components/ps/ps-menu-item/ps-menu-item.component';
import { accessDto } from './models/dto/acessoDto';
import { PerfilAplicacoesService } from './http/services/perfil-aplicacoes/perfil-aplicacoes.service';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '071b369a-b18e-48e6-b027-ad81c1283939',
      redirectUri: 'http://localhost:4200'
    }
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  // Define which permissions (=scopes) we need for Microsoft Graph
  protectedResourceMap.set('http://localhost:5109', [
    'api://95d230a5-1a44-473d-8a05-8b10721e2851/Write',
    'api://95d230a5-1a44-473d-8a05-8b10721e2851/Read',
  ]);

  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap,
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule, MatToolbarModule,
    MatIconModule, MatButtonModule, MatCardModule, MatSidenavModule, FormsModule, MatTreeModule,
    MsalModule, PsMenuItemComponent
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService, UserService, AppService, PerfilAplicacoesService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  username?: string = '';
  name?: string = '';
  acessos = [] as accessDto[];
  isUsersOpen: boolean = false;
  isMillOpen: boolean = false;
  isEduardoOpen: boolean = false;
  isAppOpen: boolean = false;
  selectedApp: Aplicacoes = new Aplicacoes(); 
  isPerfilOpen: boolean = false;
  isPerfilAplicacoesOpen: boolean = false;
  
  constructor(private authService: MsalService, private userService: UserService, private AppService : AppService, private perfilAplicacoesService: PerfilAplicacoesService) { }
  
  ngOnInit(): void {
    this.initialize();
    
    if (this.authService.instance.getActiveAccount() == null) {
      this.login();
    }
    else {
      this.username = this.authService.instance.getActiveAccount()?.username
    }
    this.AppService.selectedApp.subscribe((app: Aplicacoes) => {
      this.selectedApp = app;
    }); 
  }

  async fetch() {
    await this.userService.userByEmail(this.username).then(promise => promise.subscribe(res => 
      {this.name = res.nome
      this.perfilAplicacoesService.getAcessos(res.idPerfil).then(promise => promise.subscribe(r => this.acessos = r))
      }))
  }

  async initialize() {
    await this.authService.instance.initialize();
  }

  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null
  }

  login() {
    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.authService.instance.setActiveAccount(response.account);
        this.username = response.account.username;
      });
  }

  accessoParents() {
    return this.acessos.filter(f => f.isParent) 
  }
  accessoChild(idParent: number) {
    return this.acessos.filter(f => f.idParent == idParent) 
  }
  logout() {
    this.authService.logout()
  }

  toggleUsers() {
    this.isUsersOpen = !this.isUsersOpen;
  }

  toggleMill() {
    this.isMillOpen = !this.isMillOpen;
  }

  toggleEduardo() {
    this.isEduardoOpen = !this.isEduardoOpen;
  }

  toggleApp() {
    this.isAppOpen = !this.isAppOpen;
  }
  
  togglePerfil() {
    this.isPerfilOpen = !this.isPerfilOpen;
  }

  togglePerfilAplicacoes(){
    this.isPerfilAplicacoesOpen = !this.isPerfilAplicacoesOpen;

  }
}


