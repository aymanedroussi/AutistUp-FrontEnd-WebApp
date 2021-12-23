import { CentreService } from './../../services/centre.service';
import { Component, OnInit } from '@angular/core';
import { Centre } from 'src/app/models/centre';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {

  centres:Centre[]=[];
  constructor(private centreService:CentreService) { }

  ngOnInit(): void {
    this.getAllCentres();
  }

  getAllCentres(){
    this.centreService.getCentres().subscribe(
      (resultCentre:Centre[])=>this.centres=resultCentre)
  }
  modifier(id:any){
    
  }
  supprimer(id:any){
    this.centreService.deleteCenter(id).subscribe(rel=>this.ngOnInit());
  }
  addCentre(){

  }
}
