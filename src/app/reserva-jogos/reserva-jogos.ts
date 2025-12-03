import { Component } from '@angular/core';
import { ServicesJogos } from '../services/services-jogos';

@Component({
  selector: 'app-reserva-jogos',
  imports: [],
  templateUrl: './reserva-jogos.html',
  styleUrl: './reserva-jogos.css',
})
export class ReservaJogos {

    toggleSeta(item:any){
      item.aberto = !item.aberto;
    }

    jogoss = [{
      titulo: "Uno",
      ano: 1971,
      max_jogadores: "10",
      aberto: false,
      status: "disponível"
    }]

  
    reservado(aux: string){
    if(aux === "reservado"){
      alert("Jogo já reservado!")
     console.log("discente tentou alugar um jogo")
  }else{
      alert("Jogo reservado com sucesso!")
      console.log("Discente fez uma reserva")
  }
  }
  constructor(private jogos : ServicesJogos){}

  ngOnInit(){
    console.log("Reserva de jogos carregada")
    this.jogos.setLista(this.jogoss);
  }
}
