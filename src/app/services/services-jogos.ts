import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface MeuJogo{
      titulo: string
      ano: number,
      max_jogadores: string,
      aberto: boolean,
      status: string
}

@Injectable({
  providedIn: 'root',
})
export class ServicesJogos {
  private jogos = new BehaviorSubject<MeuJogo[]>([]);

  getLista(){
    return this.jogos.asObservable();
  }

  setLista(lista: MeuJogo[]){
    this.jogos.next(lista);
  }
}
