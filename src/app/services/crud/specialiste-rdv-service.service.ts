import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpecialisteRequest } from 'src/app/models/SpecialisteRequest';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpecialisteRdvServiceService {

  environment: any;
  constructor(private http :HttpClient) { }
  
  addSpecialisteEvolution(data:SpecialisteRequest){
    data.role="ROLE_SPECIALISTE_RDV";
    return this.http.post(`${environment.apiBack_url}/specialisteRdv/create`,data);
  }

  getAllSpecialiste(){
    return this.http.get<any[]>(`${environment.apiBack_url}/specialisteRdv/getAll`);
  }
  
  supprimerSpecialiste(email:any){
    return this.http.delete(`${environment.apiBack_url}/specialisteRdv/delete/`+email)
  }
  updateSpecialiste(email:any){
   
     return this.http.get(`${environment.apiBack_url}/specialisteRdv/update/`+email)
    
  }
}
