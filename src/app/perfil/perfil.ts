import { Component, OnInit, OnDestroy} from '@angular/core'; 
import { Navbar } from "../navbar/navbar";
import { TransferenciaLivroService } from '../services/TranferenciaLivroService';
import { Observable, Subscription } from 'rxjs';
import { TranferenciaJogoService } from '../services/TranferenciaJogoService';
import { ILivro } from '../interfaces/ILivro';
import { IJogo } from '../interfaces/IJogo';

@Component({
  selector: 'app-perfil',
  imports: [Navbar],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})

export class Perfil implements OnInit, OnDestroy { 
    nome: string = "Lara Silva";
    curso: string = "Engenharia de Software";
    matricula: string = "2390367";

    receivedLivro: ILivro[] = [];
    receivedJogo: IJogo[] = []
    //receivedJogos: MeuJogo[] = [];
    dataSubscription: Subscription | undefined; 

    constructor(private transferencia_livro_service: TransferenciaLivroService, private transferencia_jogo_service: TranferenciaJogoService){}
    
    ngOnInit(): void {
      this.livros_transferidos();
      this.jogos_transferidos();
    }

    ngOnDestroy(){
      if(this.dataSubscription){ 
        this.dataSubscription.unsubscribe();
      }
    }

    livros_transferidos(){
      this.dataSubscription = this.transferencia_livro_service.currentData.subscribe(livros =>{
        this.receivedLivro = livros
      })
    }

     jogos_transferidos(){
      this.dataSubscription = this.transferencia_jogo_service.currentData.subscribe(livros =>{
        this.receivedJogo = livros
      })
    }
  
}