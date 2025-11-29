import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CadastroComponent } from './cadastro/cadastro';

export const routes: Routes = [
    {
        path:"",
        component:Login
    },

    {
        path: "cadastro",
        component: CadastroComponent
    }

];
