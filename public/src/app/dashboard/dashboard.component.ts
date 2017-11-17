import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions = []
  shownQuestions = []
  answers = []
  user = ""
  stringSearch: string = ""
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getAll()
    this.getId()
  }

  getAll(){
    this._apiService.all()
    .then((data)=>{
      console.log("then", data)
      this.questions = data
      this.shownQuestions = data
      this.answers = data.answers
      // this._router.navigate(['/dashboard'])    
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }

  getId(){
    this._apiService.getUser()
    .then((data)=>{
      console.log("then", data)
      this.user = data.Name
      // this.shownQuestions = data
      // this.answers = data.answers
      // this._router.navigate(['/dashboard'])    
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }

  searchNotes(){
    console.log(this.stringSearch)
    this.shownQuestions = this.questions.filter((question)=>{
      return question.Title.toLowerCase().includes(this.stringSearch);
    })
  }
  
}

