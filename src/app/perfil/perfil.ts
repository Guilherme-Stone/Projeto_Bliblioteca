import { Component, OnInit, OnDestroy} from '@angular/core'; 
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
    dataSubscription: Subscription | undefined; 

    constructor(private dados: Dados){}

    ngOnInit(){
      this.dataSubscription = this.dados.currentData.subscribe(data => {
        this.receivedData = data;
        console.log('Dados recebidos no Componente Perfil:', this.receivedData);
      });
    }

    ngOnDestroy(){
      if(this.dataSubscription){ 
        this.dataSubscription.unsubscribe();
      }
  }
}