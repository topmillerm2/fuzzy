import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logName: object = {Name: ""}
  constructor(private _router: Router, private _apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._apiService.addUser(this.logName)
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
