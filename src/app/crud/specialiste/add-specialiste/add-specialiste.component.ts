import { SpecialisteEvolutionServiceService } from './../../../services/crud/specialiste-evolution-service.service';
import { SpecialisteComponent } from './../specialiste.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-specialiste',
  templateUrl: './add-specialiste.component.html',
  styleUrls: ['./add-specialiste.component.css']
})
export class AddSpecialisteComponent implements OnInit {
  SpecialisteAddForm:any;
  @Input() errorMessage:boolean=false;
  constructor(private specialisteComponent:SpecialisteComponent,private specialisteService:SpecialisteEvolutionServiceService) { }

  ngOnInit(): void {
    this.init_addSpecialiste_form();
  }

  init_addSpecialiste_form(){
    this.SpecialisteAddForm=new FormGroup({
      nom:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required])
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
