import { SpecialisteEvolutionServiceService } from './../../services/crud/specialiste-evolution-service.service';
import { Component, OnInit } from '@angular/core';
import { SpecialisteRequest } from 'src/app/models/SpecialisteRequest';

@Component({
  selector: 'app-specialiste',
  templateUrl: './specialiste.component.html',
  styleUrls: ['./specialiste.component.css']
})
export class SpecialisteComponent implements OnInit {

  currentLink:boolean=true;
  Specialisteadd:boolean=false;

  specialistes: SpecialisteRequest[]=[];
  constructor(private specialisteService:SpecialisteEvolutionServiceService) { }

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
