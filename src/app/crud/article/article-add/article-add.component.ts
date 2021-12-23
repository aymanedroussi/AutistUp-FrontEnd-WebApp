import { ArticleComponent } from './../article.component';
import { Component, ElementRef, Inject, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from 'src/app/services/crud/article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {


 articleAddForm:any;
  @Input() errorMessage:boolean=false;
  constructor(private articleComponent:ArticleComponent,private articleService:ArticleService) { }

  ngOnInit(): void {
   
    this.init_addArticle_form();
    
  }

  init_addArticle_form(){
    this.articleAddForm=new FormGroup({
      nom:new FormControl(null,[Validators.required]),
      description:new FormControl(null,[Validators.required]),
      datepublication:new FormControl(null,[Validators.required]),
      auteur: new FormControl(null,[Validators.required])
    })
    }

  collapse(){
this.articleComponent.articleAdd=false;
  }


  
  addArticle(){
this.articleService.addArticle(this.articleAddForm.value).subscribe(res=>
  {this.articleComponent.ngOnInit();
    this.init_addArticle_form();
  },
  error=>{
    
    this.errorMessage=true;
    this.init_addArticle_form();

  }
  ,
);
  }
}
