import { Component, Output } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Dados } from '../dados';

@Component({
  selector: 'app-reserva-livro',
  imports: [Navbar],
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
    status: "disponível",
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


  reservado(aux: string){
    if(aux === "reservado"){
      alert("Livro já reservado!")
     console.log("discente tentou alugar um livro")
  }else{
      alert("Livro reservado com sucesso!")
      console.log("Discente fez uma reserva")
  }
  }

  constructor(private dados: Dados){}

  shareData(){
    this.dados.sendData(this.livros)
    console.log("Livro enviado")
  }
  
    ngOnInit() {
        this.shareData(); 
    }
}
