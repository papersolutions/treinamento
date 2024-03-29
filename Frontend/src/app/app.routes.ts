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
import { MillEduInsComponent } from './MillEdu/mill-edu-ins/mill-edu-ins.component';
import { MillEduPutComponent } from './MillEdu/mill-edu-put/mill-edu-put.component';
import { MillEduGetComponent } from './MillEdu/mill-edu-get/mill-edu-get.component';
import { MillEduLisComponent } from './MillEdu/mill-edu-lis/mill-edu-lis.component';
import { AppFormComponent } from './Aplicacao/app-form/app-form.component';
import { AppListComponent } from './Aplicacao/app-list/app-list.component';
import { DeletarComponent } from './Aplicacao/app-delete/app-delete.component';
import { PerGetAllComponent } from './pages/perfil/per-get-all/per-get-all.component';
import { PerGetComponent } from './pages/perfil/per-get/per-get.component';
import { ModificarAplicacaoComponent } from './Aplicacao/modificar-aplicacao/app-modify.component';
import { PerPutComponent } from './pages/perfil/per-put/per-put.component';
import { PerInsComponent } from './pages/perfil/per-ins/per-ins.component';
import { GerenciarPerfilAplicacoesComponent } from './PerfilAplicacoes/gerenciar-perfil-aplicacoes/gerenciar-perfil-aplicacoes.component';
import { MillListComponent } from './MillFla/mill-list/mill-list.component';

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
        path: 'mill-list',
        component: MillListComponent
    },
    {
        path: 'mill-edu-ins',
        component: MillEduInsComponent
    },
    {
        path: 'mill-edu-put',
        component: MillEduPutComponent
    },
    {
        path: 'mill-edu-get',
        component: MillEduGetComponent
    },
    {
        path: 'mill-edu-lis',
        component: MillEduLisComponent
    },
    {
        path: 'app-delete',
        component: DeletarComponent
    },
    {
        path: 'app-form',
        component: AppFormComponent
    },
    {
        path: 'app-list',
        component: AppListComponent
    },
    {
        path: 'modificar-aplicacao/:id',
        component: ModificarAplicacaoComponent
    },
    {
        path: 'per-get-all',
        component: PerGetAllComponent
    },
    {
        path: 'per-get',
        component: PerGetComponent
    },
    {
        path: 'per-put',
        component: PerPutComponent
    },
    {
        path: 'per-ins',
        component: PerInsComponent
    },
    { 
        path: 'gerenciar-perfil-aplicacoes', 
        component: GerenciarPerfilAplicacoesComponent
    }

];
