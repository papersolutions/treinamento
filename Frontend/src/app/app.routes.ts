import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users/users.component';
import { UserModifyComponent } from './user-modify/user-modify.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'user-modify',
        component: UserModifyComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    }
];
