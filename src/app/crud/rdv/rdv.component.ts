import { RdvService } from './../../services/rdv.service';
import { Rdv } from './../../models/rdv';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  rdvs:Rdv[]=[];
  constructor(private rdvService:RdvService) { }

  ngOnInit(): void {
    this.getRdvs();
  }


  getRdvs(){
    this.rdvService.getAllRdvs().subscribe((rdv:Rdv[])=>
      this.rdvs=rdv);
  }

}
