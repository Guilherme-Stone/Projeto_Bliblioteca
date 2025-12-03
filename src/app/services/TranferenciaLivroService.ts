import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILivro } from '../interfaces/ILivro';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaLivroService {

  private listaSource = new BehaviorSubject<ILivro[]>([]);

  public currentData: Observable<ILivro[]> = this.listaSource.asObservable();
  
  constructor() { }

  sendData(data: ILivro[]): void{
    this.listaSource.next(data);
  }
}
