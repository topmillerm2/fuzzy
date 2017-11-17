import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }


  addUser(userObj){
    console.log("hit service")
    console.log(userObj)
    return this._http.post('/add', userObj).map(Response=>Response.json()).toPromise();
  }

  addQuestion(qObj){
    console.log("hit service")
    return this._http.post('/create', qObj).map(Response=>Response.json()).toPromise();
  }

  all(){
    console.log("hit service")
    return this._http.get('get/all').map(Response=>Response.json()).toPromise();
  }
  getUser(){
    console.log("hit service")
    return this._http.get('get/user').map(Response=>Response.json()).toPromise();
  }
  postAnswer(ident){
    console.log("hit service")
    console.log(ident)
    return this._http.post('post/answer/:ident', ident).map(Response=>Response.json()).toPromise();
  }
}
 
