import { ArticleService } from './../../services/crud/article.service';
import { Article } from './../../models/Article';
import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 

  currentLink:boolean=true;
  articleAdd:boolean=false;
  articleEdit:boolean=false;
  articles: Article[]=[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  addArticle(){
this.articleAdd=true;
this.currentLink=false;
this.articleEdit=false;
  }

  getArticles(){
    this.articleService.getArticles().subscribe((article:Article[])=> {

      for(var articleUpdate of article){
        articleUpdate.date=articleUpdate.datepublication?.toString().slice(0,10);
      }
      this.articles=article;
  });
  }
  supprimer(article:any){
this.articleService.supprimerArticles(article).subscribe(res=>this.ngOnInit());

  }
  modifier(article:any){
    
    
    this.articleAdd=true;
    this.articleService.supprimerArticles(article).subscribe(res=>console.log(res));
  }

  open(){

  }
}
