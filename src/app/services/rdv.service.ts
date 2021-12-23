import { TokenService } from './token.service';
import { Rdv } from './../models/rdv';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  email:any;
  constructor(private http :HttpClient,private tokenService:TokenService) { }

  getAllRdvs(){
    this.email=this.tokenService.getInfos().sub;
    return this.http.get<Rdv[]>(`${environment.apiBack_url}/specialisteRdv/getAllRdvs/`+this.email);
  }
}
