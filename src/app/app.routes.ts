import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro';
import { ReservaJogos } from './reserva-jogos/reserva-jogos';
import { ReservaLivro } from './reserva-livro/reserva-livro';
import { Perfil } from './perfil/perfil';
import { Login } from './login/login';

export const routes: Routes = [
  
    {
        path:"",
        component: ReservaLivro
    },

    {
        path: "jogos",
        component: ReservaJogos
    },

    {
        path: "perfil",
        component: Perfil
    },

    {
        path: "cadastro",
        component: CadastroComponent
    }

];
