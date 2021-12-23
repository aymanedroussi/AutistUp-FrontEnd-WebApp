import { Article } from './../../models/Article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ArticleAddComponent } from 'src/app/crud/article/article-add/article-add.component';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  modifer:boolean=false;
  idModifier:any;
  environment: any;
  constructor(private http :HttpClient) { }
  
  addArticle(data:Article){
    console.log(data);
    return this.http.post(`${environment.apiBack_url}/formation/article/add`,data);
  }

  getArticles(){
    return this.http.get<any[]>(`${environment.apiBack_url}/formation/article/getAll`);
  }
  
  supprimerArticles(id:any){
    console.log(id);
    return this.http.delete(`${environment.apiBack_url}/formation/article/delete/`+id)
  }
  modifier(id:any){
    this.modifer=true;
    return this.idModifier=id;
  }

  getArticleById(id:any){
    return this.http.get<Article>(`${environment.apiBack_url}/formation/article/get/`+id);
  }

}
