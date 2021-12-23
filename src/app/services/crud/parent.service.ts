import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpecialisteRequest } from 'src/app/models/SpecialisteRequest';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ParentService {


  environment: any;
  constructor(private http :HttpClient) { }
  
  addparent(data:SpecialisteRequest){
    data.role="ROLE_PARENT";
    return this.http.post(`${environment.apiBack_url}/parent/create`,data);
  }

  getparent(){
    return this.http.get<any[]>(`${environment.apiBack_url}/parent/getAll`);
  }
  
  supprimerparent(email:any){
    return this.http.delete(`${environment.apiBack_url}/parent/delete/`+email)
  }
  updateparent(email:any){
   
     return this.http.get(`${environment.apiBack_url}/parent/update/`+email)
    
  }
}
