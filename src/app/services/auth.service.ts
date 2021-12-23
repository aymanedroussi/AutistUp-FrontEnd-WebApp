import { TokenService } from './token.service';
import { AdminLoginRequest } from './../models/AdminLoginRequest';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roleUser:any;
  environment: any;
  constructor(private http :HttpClient,private tokenService:TokenService) { }
  
  loginAdmin(data:AdminLoginRequest){
    return this.http.post(`${environment.apiBack_url}/login`,data);
  }


  logout(){
this.tokenService.deleteToken();

  }
}
