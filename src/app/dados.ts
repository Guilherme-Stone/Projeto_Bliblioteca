import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface MeuObjeto {
    nome: string
    autor: string,
    ano: number,
    status: string,
    aberto: boolean
}

@Injectable({
  providedIn: 'root',
})
export class Dados {

  private listaSource = new BehaviorSubject<MeuObjeto[]>([]);

  public currentData: Observable<MeuObjeto[]> = this.listaSource.asObservable();
  
  constructor() { }

  sendData(data: MeuObjeto[]): void{
    this.listaSource.next(data);
  }
}
