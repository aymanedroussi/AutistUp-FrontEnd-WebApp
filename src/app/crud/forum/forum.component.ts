import { ForumService } from './../../services/crud/forum.service';
import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/forum';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
addForm:boolean=false;
  questions:Forum[]=[];
  constructor(private forumService:ForumService) { }

  ngOnInit(): void {
    this.getAllForums();
  }

  getAllForums(){
    this.forumService.getAllForums().subscribe(
      (resultForum:Forum[])=>this.questions=resultForum)
  }
  ajouter(){
    this.addForm=true;
  }
  addReponse(){
    
  }
}
