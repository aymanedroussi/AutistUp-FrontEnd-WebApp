import { SpecialisteRequest } from './../../models/SpecialisteRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpecialisteEvolutionServiceService {

  environment: any;
  constructor(private http :HttpClient) { }
  
  addSpecialisteEvolution(data:SpecialisteRequest){
    data.role="ROLE_SPECIALISTE_EVOLUTION";
    return this.http.post(`${environment.apiBack_url}/specialisteEvolution/create`,data);
  }

  getAllSpecialiste(){
    return this.http.get<any[]>(`${environment.apiBack_url}/specialisteEvolution/getAll`);
  }
  
  supprimerSpecialiste(email:any){
    return this.http.delete(`${environment.apiBack_url}/specialisteEvolution/delete/`+email)
  }
  updateSpecialiste(email:any){
   
     return this.http.get(`${environment.apiBack_url}/specialisteEvolution/update/`+email)
    
  }

}


