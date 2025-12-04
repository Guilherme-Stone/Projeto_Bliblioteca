import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
    constructor(private httpclient: HttpClient){}

    cadastra(usuario: IUser){
        return this.httpclient.post<IUser>(`${environment.API_PATH}user/cadastrar`,usuario)
    }

    getCadastro(matricula: number){
      return this.httpclient.get(`${environment.API_PATH}user/${matricula}`)
    }

}
