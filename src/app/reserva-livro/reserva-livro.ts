import { Component, Output } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { LivroService } from '../services/livro';
import { ILivro } from '../interfaces/ILivro';
import { TransferenciaLivroService } from '../services/TranferenciaLivroService';

@Component({
  selector: 'app-reserva-livro',
  imports: [Navbar],
  templateUrl: './reserva-livro.html',
  styleUrl: './reserva-livro.css',
})
export class ReservaLivro {
  

   constructor(private livro_service: LivroService, private transferencia_livro_service: TransferenciaLivroService){

   }


  toggleSeta(item: ILivro){
    item.aberto = !item.aberto;
  }

  
  reservar(id:number){
   this.livro_service.getById(id).subscribe(livro =>{
    
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
        this.livro_service.setById(id,{...livro, status: "INDISPONIVEL"}).subscribe(() => {
        alert("Livro reservado com sucesso!");
        console.log("Discente fez uma reserva");
        this.carregalistaLivros();  
      })
    }
  })
}

  cancelarReserva(id: number){

    this.livro_service.getById(id).subscribe(livro => {

      if(!livro){
        alert("Livro não existe no banco de dados!")
        console.log("Discente tentou cancelar uma reserva de um livro inexistente")
        return;
      }

      if(livro.status === "DISPONIVEL"){
          alert("Livro já disponível!")
          console.log("Discente tentou cancelar reserva de um livro disponível")
          return;
      }

      if(livro.status === "INDISPONIVEL"){
        this.livro_service.setById(id, {...livro, status: "DISPONIVEL"}).subscribe(() => {
          alert("Livro cancelado com sucesso!")
          console.log("Discente fez o cancelamento de um livro!")
          this.carregalistaLivros();
          return;
        })
      }
    })
  }


  listaLivros: ILivro[] = [];

  carregalistaLivros(): void{
    this.livro_service.getAll().subscribe(livros =>{
        this.listaLivros = livros;
    })
  }

  ngOnInit(): void{
    this.carregalistaLivros()
  }

  enviarDados(): void{
    this.transferencia_livro_service.sendData(this.listaLivros);
  }

}