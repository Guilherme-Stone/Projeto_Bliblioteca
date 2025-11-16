import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-livro',
  imports: [],
  templateUrl: './reserva-livro.html',
  styleUrl: './reserva-livro.css',
})
export class ReservaLivro {


    toggleSeta(item: any){
      item.aberto = !item.aberto;
    }


    livros = [
  {
    nome: "O Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    ano: 1954,
    status: "disponível",
    aberto: false
  },

  {
    nome: "1984",
    autor: "George Orwell",
    ano: 1949,
    status: "emprestado",
    aberto: false
  },
  {
    nome: "Dom Quixote",
    autor: "Miguel de Cervantes",
    ano: 1605,
    status: "reservado",
    aberto: false
  }

];

  statu: string = "reservado" 

  reservado(aux: string){
    if(aux === "reservado"){
      alert("Livro já reservado!")
     console.log("discente tentou alugar um livro")
  }else{
      alert("Livro reservado com sucesso!")
      console.log("Discente fez uma reserva")
  }
  }
}
