import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { CadastroComponent } from "./cadastro/cadastro";
import { ReservaLivro } from "./reserva-livro/reserva-livro";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, CadastroComponent, ReservaLivro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrabalhoAngular');
}
