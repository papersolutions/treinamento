import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users/users.component';
import { UserModifyFlaviaComponent } from './user-modify-flavia/user-modify-flavia.component';
import { CadastroFlaviaComponent } from './pages/cadastro-flavia/cadastro-flavia.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersModifyComponent } from './pages/users/users-modify/users-modify.component';
import { TesteComponent } from './pages/users/teste/teste.component';
import { LoginFlaviaComponent } from './pages/login-flavia/login-flavia.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login-flavia',
        component: LoginFlaviaComponent
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'user-modify-flavia',
        component: UserModifyFlaviaComponent
    },
    {
        path: 'cadastro-flavia',
        component: CadastroFlaviaComponent
    },
    {
        path: 'users/create',
        component: UserFormComponent
    },
    {
        path: 'users/teste',
        component: TesteComponent
    },
    {
        path: 'users-modify',
        component: UsersModifyComponent
    }
];
