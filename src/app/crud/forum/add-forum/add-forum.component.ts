import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/crud/article.service';
import { ArticleComponent } from '../../article/article.component';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent implements OnInit {
  articleAddForm:any;
  @Input() errorMessage:boolean=false;
  constructor(private articleService:ArticleService) { }

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
  }


  
  addArticle(){
this.articleService.addArticle(this.articleAddForm.value).subscribe(res=>
  {
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
