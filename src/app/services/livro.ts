import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ILivro } from '../interfaces/ILivro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {

  

    constructor(private httpclient: HttpClient) { 
    }

    getAll(): Observable<ILivro[]> {
      return this.httpclient.get<ILivro[]>(`${environment.API_PATH}livro`);
    }

    getById(id: number): Observable<ILivro> {
      return this.httpclient.get<ILivro>(`${environment.API_PATH}livro/${id}`);
    }

    setById(id: number, livro:ILivro){
      return this.httpclient.put<ILivro>(`${environment.API_PATH}livro/${id}`,livro)
    }
    
}
