import { TokenService } from './../../services/token.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  
  loginForm:any;
  @Input() errorMessage:boolean=false;

  constructor(private router:Router,private authService:AuthService,private tokenService:TokenService) {
    
   }

  ngOnInit(): void {
    this.init_login_form();
  }
  init_login_form(){
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required])
    })}


    continue(){
      this.authService.loginAdmin(this.loginForm.value).subscribe(
        
        
        (token:any)=>

        { this.authService.roleUser=token.role
          this.router.navigateByUrl("/dashboardAdmin");
          this.tokenService.setToken(token);
      
    

    },
    error=>{
      
      this.errorMessage=true;
      
    }
    ,
    ()=>{}
    );
    }


}
