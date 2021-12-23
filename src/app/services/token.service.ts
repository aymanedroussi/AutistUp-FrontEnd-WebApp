import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

 
  
  setToken(data:any){
    localStorage.setItem('token',data.token);
    localStorage.setItem('role',data.role);
  }
  getRole(){
    return localStorage.getItem('role'); 
  }

  deleteToken(){
    localStorage.removeItem('token');
  }
  getToken():any{
    return localStorage.getItem('token');
  }

  decode(payload : any){
    return JSON.parse(atob(payload));
  }
  
  payload(token :any){
    const payload=token.split('.')[1];
    return this.decode(payload);
  }

  
getInfos(){

  const token = this.getToken();

  if (token){
    const payload= this.payload(token);
    return payload ? payload : null;

  }
  return null;
}


isValid(){
  const token = this.getToken();
 

  if(token){
    return true;// !Warning
    }
  
  return false;

}

loggedIn(){
  return this.isValid();
}


}
