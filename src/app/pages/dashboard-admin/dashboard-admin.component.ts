import { TokenService } from './../../services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  userRole:any;
  forumLien:boolean=false
  centreLien:boolean=false
  currentLink:boolean=true;
  speacialisteLink:boolean=false;
  specialisteRdvLink:boolean=false;
  parentComponentLink:boolean=false;
  articleComponentLink:boolean=false;
  constructor(private authService:AuthService,private router:Router,private tokenService:TokenService) {
    this.userRole=this.tokenService.getRole();
  console.log(this.userRole);
   }
  ngOnInit(): void {
  
  }

  update(){
    this.currentLink=false;
  this.speacialisteLink=false;
  this.specialisteRdvLink=false;
  this.parentComponentLink=false;
  this.articleComponentLink=false;
  this.centreLien=false;
  this.forumLien=false;
  }
  speacialisteComponent(){
    this.update();
    this.speacialisteLink=true;

  }

  speacialisteComponentRdv(){
    this.update();
    this.specialisteRdvLink=true;

  }

  parentComponent(){
    this.update();
    this.parentComponentLink=true;
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/home");
  }

  articleComponent(){
    this.update();
    this.articleComponentLink=true;
  }
  centreLink(){
    this.update();
    this.centreLien=true;
  }
  forumComponent(){
    this.update();
    this.forumLien=true;
  }
}
