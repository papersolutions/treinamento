import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users/users.component';
import { UserModifyFlaviaComponent } from './UserFla/user-modify-flavia/user-modify-flavia.component';
import { CadastroFlaviaComponent } from './UserFla/cadastro-flavia/cadastro-flavia.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersModifyComponent } from './pages/users/users-modify/users-modify.component';
import { TesteComponent } from './pages/users/teste/teste.component';
import { LoginFlaviaComponent } from './UserFla/login-flavia/login-flavia.component';
import { MillFlaInsertComponent } from './MillFla/mill-fla-insert/mill-fla-insert.component';
import { MillFlaSearchComponent } from './MillFla/mill-fla-search/mill-fla-search.component';
import { MillFlaComponent } from './MillFla/mill-fla/mill-fla.component';


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
    },
    {
        path: 'mill-fla-insert',
        component: MillFlaInsertComponent
    },

    {
        path: 'mill-fla-search',
        component: MillFlaSearchComponent
    },
    {
        path: 'mill-fla',
        component: MillFlaComponent
    },
 

];
