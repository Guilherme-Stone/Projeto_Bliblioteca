import { Component } from '@angular/core';
import { TranferenciaJogoService } from '../services/TranferenciaJogoService';
import { JogoService } from '../services/jogo';
import { IJogo } from '../interfaces/IJogo';

@Component({
  selector: 'app-reserva-jogos',
  imports: [],
  templateUrl: './reserva-jogos.html',
  styleUrl: './reserva-jogos.css',
})
export class ReservaJogos {
    listaJogos: IJogo[] = [];

    toggleSeta(item:any){
      item.aberto = !item.aberto;
    }

  constructor(private jogo_service : JogoService,private transferencia_jogo_service: TranferenciaJogoService ){}

    reservar(id:number){
   this.jogo_service.getById(id).subscribe(livro =>{
    
      if(!livro){
      alert("Livro não existe no banco de dados!")
      console.log("Discente tentou cancelar uma reserva de um livro inexistente")
      return;
    }
    
      if(livro.status === "INDISPONIVEL"){
        alert("Reserva cancelada com sucesso!")
        console.log("Discente cancelou uma reserva")
        return;
      }

      if(livro.status === "DISPONIVEL"){
        this.jogo_service.setById(id,{...livro, status: "INDISPONIVEL"}).subscribe(() => {
        alert("Livro reservado com sucesso!");
        console.log("Discente fez uma reserva");
        this.carregarListaJogos();  
      })
    }
  })
}

  cancelarReserva(id: number){

    this.jogo_service.getById(id).subscribe(jogo => {

      if(!jogo){
        alert("Livro não existe no banco de dados!")
        console.log("Discente tentou cancelar uma reserva de um livro inexistente")
        return;
      }

      if(jogo.status === "DISPONIVEL"){
          alert("Livro já disponível!")
          console.log("Discente tentou cancelar reserva de um livro disponível")
          return;
      }

      if(jogo.status === "INDISPONIVEL"){
        this.jogo_service.setById(id, {...jogo, status: "DISPONIVEL"}).subscribe(() => {
          alert("Livro cancelado com sucesso!")
          console.log("Discente fez o cancelamento de um livro!")
          this.carregarListaJogos();
          return;
        })
      }
    })
  }

  carregarListaJogos(){
    this.jogo_service.getAll().subscribe(jogo =>{
        this.listaJogos = jogo;
    })
  }

  ngOnInit(){
    this.carregarListaJogos();
  }

  enviarDados(){
      this.transferencia_jogo_service.sendData(this.listaJogos)
  }
  
}
