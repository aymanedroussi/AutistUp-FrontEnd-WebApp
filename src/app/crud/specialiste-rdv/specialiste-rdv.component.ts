import { Component, OnInit } from '@angular/core';
import { SpecialisteRequest } from 'src/app/models/SpecialisteRequest';
import { SpecialisteRdvServiceService } from 'src/app/services/crud/specialiste-rdv-service.service';

@Component({
  selector: 'app-specialiste-rdv',
  templateUrl: './specialiste-rdv.component.html',
  styleUrls: ['./specialiste-rdv.component.css']
})
export class SpecialisteRdvComponent implements OnInit {

  currentLink:boolean=true;
  Specialisteadd:boolean=false;

  specialistes: SpecialisteRequest[]=[];
  constructor(private specialisteService:SpecialisteRdvServiceService) { }
 
  ngOnInit(): void {
    this.getSpecialistes();
  }

  addSpecialiste(){
this.Specialisteadd=true;
this.currentLink=false;
  }

  getSpecialistes(){
   
    this.specialisteService.getAllSpecialiste().subscribe((specialisteList:SpecialisteRequest[])=> this.specialistes=specialisteList);
  }
  supprimer(emailSpecialiste:any){
this.specialisteService.supprimerSpecialiste(emailSpecialiste).subscribe(res=>this.ngOnInit());

  }


  desactiver(emailSpecialiste:any){
this.specialisteService.updateSpecialiste(emailSpecialiste).subscribe(res=>this.ngOnInit());

  }
  activer(emailSpecialiste:any){

  }
    
}
