import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
  question: object = {Title: "", Description: ""}
  constructor(private _router: Router, private _apiService: ApiService) { }

  ngOnInit() {
  }

  postQuestion(){
    this._apiService.addQuestion(this.question)
    .then((data)=>{
      console.log("then", data)
      // this.logName = data
      // this.shownBikes = data
      this._router.navigate(['/dashboard'])    
    })
    .catch((error)=>{
      console.log("catch", error)
    })
    }
  }


