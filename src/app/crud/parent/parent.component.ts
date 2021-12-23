import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ParentRequest } from 'src/app/models/ParentRequest';
import { ParentService } from 'src/app/services/crud/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentLink:boolean=true;
  parentAdd:boolean=false;

  parents: ParentRequest[]=[];
  constructor(private parentService:ParentService) { }

  ngOnInit(): void {
    this.getParents();
   
  }

  addParent(){
this.parentAdd=true;
this.currentLink=false;
  }

  getParents(){
    this.parentService.getparent().subscribe((parent:ParentRequest[])=> this.parents=parent);
  }
  supprimer(emailSpecialiste:any){
this.parentService.supprimerparent(emailSpecialiste).subscribe(res=>this.ngOnInit());

  }

  desactiver(emailSpecialiste:any){
this.parentService.updateparent(emailSpecialiste).subscribe(res=>this.ngOnInit());

  }
  activer(emailSpecialiste:any){

  }
}
