import { Component, OnInit, OnDestroy} from '@angular/core'; 
import { Navbar } from "../navbar/navbar";
import { Dados } from '../services/TranferenciaLivroService';
import { Observable, Subscription } from 'rxjs';
import { ServicesJogos } from '../services/services-jogos';

interface MeuObjeto {
    nome: string
    autor: string,
    ano: number,
    status: string,
    aberto: boolean
}

interface MeuJogo{
      titulo: string
      ano: number,
      max_jogadores: string,
      aberto: boolean,
      status: string
}


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

    receivedData: MeuObjeto[] = [];
    receivedJogos: MeuJogo[] = [];
    dataSubscription: Subscription | undefined; 

    constructor(private dados: Dados, private jogos: ServicesJogos){}
    

    ngOnInit(){
      this.dataSubscription = this.dados.currentData.subscribe(data => {
        this.receivedData = data;
        console.log('Dados recebidos no Componente Perfil:', this.receivedData);
      });

      this.dataSubscription =  this.jogos.getLista().subscribe(data => {
        this.receivedJogos = data;
        console.log("Dados do jogos recebidos no Componente Perfil:", this.receivedJogos);
      })
    }

    ngOnDestroy(){
      if(this.dataSubscription){ 
        this.dataSubscription.unsubscribe();
      }
  }
}