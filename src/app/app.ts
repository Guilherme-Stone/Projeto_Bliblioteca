import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { CadastroComponent } from "./cadastro/cadastro";
import { ReservaLivro } from "./reserva-livro/reserva-livro";
import { ReservaJogos } from "./reserva-jogos/reserva-jogos";
import { Navbar } from "./navbar/navbar";
import { Perfil } from "./perfil/perfil";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, CadastroComponent, ReservaLivro, ReservaJogos, Perfil, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrabalhoAngular');
}
