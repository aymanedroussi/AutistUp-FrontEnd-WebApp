import { ParentService } from 'src/app/services/crud/parent.service';
import { ParentComponent } from './../parent.component';
import { Component, Input, OnInit } from '@angular/core';
import { SpecialisteComponent } from '../../specialiste/specialiste.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent implements OnInit {

  parentAddForm:any;
  @Input() errorMessage:boolean=false;
  constructor(private parentComponent:ParentComponent,private parentService:ParentService) { }

  ngOnInit(): void {
    this.init_addParent_form();
  }

  init_addParent_form(){
    this.parentAddForm=new FormGroup({
      nom:new FormControl(null,[Validators.required]),
      age:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required]),
    })}

  collapse(){
this.parentComponent.parentAdd=false;
  }

  addParent(){
this.parentService.addparent(this.parentAddForm.value).subscribe(res=>
  {this.parentComponent.ngOnInit();
    this.init_addParent_form();
  },
  error=>{
    
    this.errorMessage=true;
    this.init_addParent_form();

  }
  ,
);
  }
}
