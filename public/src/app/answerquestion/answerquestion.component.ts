import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-answerquestion',
  templateUrl: './answerquestion.component.html',
  styleUrls: ['./answerquestion.component.css']
})
export class AnswerquestionComponent implements OnInit {
  answers=[]
  question = []
  shownQ = []
  qId: string;
  answer: object = {Title: "", Description: "",}



  constructor(private _router: Router,private _route: ActivatedRoute, private _apiService: ApiService) { 
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

  submitAnswer(){
    this._apiService.postAnswer(this.qId)
    .then((data)=>{
      console.log("then", data)
      this.answers = data
      // this.shownQ = this.question.filter((question)=>{
      //   return question._id.includes(this.qId)
      // })
      // console.log(this.shownQ)
      this._router.navigate(['/dashboard'])    
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }
}
