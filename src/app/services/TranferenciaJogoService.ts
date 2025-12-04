import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IJogo } from '../interfaces/IJogo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranferenciaJogoService {
  private listaSource = new BehaviorSubject<IJogo[]>([]);

  public currentData: Observable<IJogo[]> = this.listaSource.asObservable();

  sendData(lista: IJogo[]){
    this.listaSource.next(lista);
  }
}
