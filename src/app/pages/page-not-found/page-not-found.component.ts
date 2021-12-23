import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private tokenService:TokenService,private router:Router) { }

  ngOnInit(): void {
  }

  TakeMeHome(){
    if(this.tokenService.loggedIn())
        this.router.navigateByUrl("/dashboardAdmin");
    else{
      this.router.navigateByUrl("/home");
    }
 
  }
}
