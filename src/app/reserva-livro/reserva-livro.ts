import { Component, Output } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { LivroService } from '../services/livro';
import { ILivro } from '../interfaces/ILivro';

@Component({
  selector: 'app-reserva-livro',
  imports: [Navbar],
  templateUrl: './reserva-livro.html',
  styleUrl: './reserva-livro.css',
})
export class ReservaLivro {
  

   constructor(private livro_service: LivroService){

   }


  toggleSeta(item: ILivro){
    item.aberto = !item.aberto;
  }

  
  reservar(id:number){
    if(this.livro_service.getById(id).subscribe(livro =>{
        (livro ==  null)
    })){
      alert("Livro não existe no banco de dados!")
      console.log("Discente tentou cancelar uma reserva de um livro inexistente")
      return;
    }

    if(this.livro_service.getById(id).subscribe(livro =>{
        (livro.status === "reservado")}
    ))
    {   
      this.livro_service.setById(id).subscribe(livro_dado => {
            livro_dado.status = "RESERVADO"
        })

        alert("Livro já reservado!")
        console.log("discente tentou alugar um livro")
        return;
        
    }if(this.livro_service.getById(id).subscribe(livro =>{
        (livro.status === "DISPONIVEL")})){

        alert("Livro reservado com sucesso!")
        console.log("Discente fez uma reserva")
        this.livro_service.setById(id).subscribe(livro_data=>{
            livro_data.status = "INDISPONIVEL"
        })
    }
  }

  cancelarReserva(id: number){
    if(this.livro_service.getById(id).subscribe(livro =>{
        (livro ==  null)
    })){
      alert("Livro não existe no banco de dados!")
      console.log("Discente tentou cancelar uma reserva de um livro inexistente")
      return;
    }
    
    if(this.livro_service.getById(id).subscribe(livro =>{
        (livro.status === "INDISPONIVEL")}
    )){
        this.livro_service.setById(id).subscribe(livro_dado => {
            livro_dado.status = "DISPONIVEL"
        }
      )

      alert("Reserva cancelada com sucesso!")
      console.log("Discente cancelou uma reserva")
      return;
    }
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
}