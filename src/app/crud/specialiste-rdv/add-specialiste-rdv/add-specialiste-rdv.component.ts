import { SpecialisteRdvServiceService } from 'src/app/services/crud/specialiste-rdv-service.service';
import { SpecialisteRdvComponent } from './../specialiste-rdv.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-specialiste-rdv',
  templateUrl: './add-specialiste-rdv.component.html',
  styleUrls: ['./add-specialiste-rdv.component.css']
})
export class AddSpecialisteRdvComponent implements OnInit {

  SpecialisteAddForm:any;
  @Input() errorMessage:boolean=false;
  constructor(private specialisteComponent:SpecialisteRdvComponent,private specialisteService:SpecialisteRdvServiceService) { }

  ngOnInit(): void {
    this.init_addSpecialiste_form();
  }

  init_addSpecialiste_form(){
    this.SpecialisteAddForm=new FormGroup({
      nom:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required]),
      image:new FormControl(null,[Validators.required]),
      description:new FormControl(null,[Validators.required])
    })}

  collapse(){
this.specialisteComponent.Specialisteadd=false;
  }

  addSpecialiste(){
this.specialisteService.addSpecialisteEvolution(this.SpecialisteAddForm.value).subscribe(res=>
  {this.specialisteComponent.ngOnInit();
    this.init_addSpecialiste_form();
  },
  error=>{
    
    this.errorMessage=true;
    this.init_addSpecialiste_form();

  }
  ,
);
  }
}
