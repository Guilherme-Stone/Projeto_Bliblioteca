import { Component, OnInit, OnDestroy} from '@angular/core'; // Adicione OnInit e OnDestroy
import { Navbar } from "../navbar/navbar";
import { Dados } from '../dados';
import { Observable, Subscription } from 'rxjs';

interface MeuObjeto {
    nome: string
    autor: string,
    ano: number,
    status: string,
    aberto: boolean
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
    // CORRIGIDO: Renomeei para dataSubscription (com 'p') para consistência
    dataSubscription: Subscription | undefined; 

    constructor(private dados: Dados){}

    ngOnInit(){
      // Assina o Observable para receber dados
      this.dataSubscription = this.dados.currentData.subscribe(data => {
        this.receivedData = data;
        // Se você vir esta mensagem, os dados foram recebidos com sucesso!
        console.log('Dados recebidos no Componente Perfil:', this.receivedData);
      });
    }

    ngOnDestroy(){
      // CRÍTICO: Faz o unsubscribe para liberar memória
      if(this.dataSubscription){ 
        this.dataSubscription.unsubscribe();
      }
  }
}