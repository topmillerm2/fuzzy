import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-showquestion',
  templateUrl: './showquestion.component.html',
  styleUrls: ['./showquestion.component.css']
})
export class ShowquestionComponent implements OnInit {
  qId: string
  question = []
  shownQ = []
  constructor(private _route: ActivatedRoute, private _apiService: ApiService) { 
    this._route.paramMap.subscribe( params => {
      this.qId = params.get('id')
    
    })
  }

  ngOnInit() {
    this.obtain()
  }
  obtain(){
    this._apiService.all()
    .then((data)=>{
      console.log("then", data)
      this.question = data
      this.shownQ = this.question.filter((question)=>{
        return question._id.includes(this.qId)
      })
      console.log(this.shownQ)
      // this._router.navigate(['/browse'])    
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }
}
