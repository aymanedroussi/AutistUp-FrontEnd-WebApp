import { Centre } from './../models/centre';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private http :HttpClient) {

   }
 getCentres(){
    return this.http.get<Centre[]>(`${environment.apiBack_url}/ville/getAllCentres`);
  }

  deleteCenter(id:any){
    return this.http.get(`${environment.apiBack_url}/ville/deleteCentre/`+id)
  }
}
