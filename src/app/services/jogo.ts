import { Injectable } from '@angular/core';
import { IJogo } from '../interfaces/IJogo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JogoService {
  

    constructor(private httpclient: HttpClient) { 
    }

    getAll(): Observable<IJogo[]> {
      return this.httpclient.get<IJogo[]>(`${environment.API_PATH}jogo`);
    }

    getById(id: number): Observable<IJogo> {
      return this.httpclient.get<IJogo>(`${environment.API_PATH}jogo/${id}`);
    }

    setById(id: number, livro:IJogo){
      return this.httpclient.put<IJogo>(`${environment.API_PATH}jogo/${id}`,livro)
    }
}
