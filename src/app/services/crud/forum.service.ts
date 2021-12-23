import { Forum } from './../../models/forum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http :HttpClient) {

  }
  getAllForums(){
    return this.http.get<any[]>(`${environment.apiBack_url}/forum/getAll`);
  }

}
