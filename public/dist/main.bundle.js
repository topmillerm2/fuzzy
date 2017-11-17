webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/answerquestion/answerquestion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answerquestion/answerquestion.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]= \"['/dashboard']\">Home</a> || <a [routerLink]= \"['/show/',qId]\"> Go Back to ?</a>  || <a href=\"\">Logout</a>\n\n<br>\n\n<div *ngFor = \"let question of shownQ\">\n  <h1>{{ question.Title }}</h1>\n  <h5>{{ question.Description }}</h5>\n</div>\n\n\n<fieldset>\n  <form  (submit) = \"submitAnswer()\" #answerForm = \"ngForm\">\n    Your Answer: <input type=\"text\" name=\"repuesta\" id=\"\"\n    required\n    minlength=\"5\"\n    [(ngModel)] = \"answer.Title\"\n    #respuesta = \"ngModel\"\n    ><p style=\"color:red\" *ngIf = \"respuesta.invalid\" class=\"invalid\"> Answer must be at least 5 characters long.</p>\n    <br>\n    Supporting details for your answer (optional): <input type=\"text\" name=\"details\"\n    [(ngModel)] = \"answer.Description\"\n    #details = \"ngModel\"\n    >\n    <br>\n    <input type=\"submit\" value=\"Cancel\" id=\"\"> || <input type=\"submit\" value=\"Submit\" [disabled] = \"answerForm.invalid\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/answerquestion/answerquestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerquestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerquestionComponent = (function () {
    function AnswerquestionComponent(_router, _route, _apiService) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._apiService = _apiService;
        this.answers = [];
        this.question = [];
        this.shownQ = [];
        this.answer = { Title: "", Description: "", };
        this._route.paramMap.subscribe(function (params) {
            _this.qId = params.get('id');
        });
    }
    AnswerquestionComponent.prototype.ngOnInit = function () {
        this.obtain();
    };
    AnswerquestionComponent.prototype.obtain = function () {
        var _this = this;
        this._apiService.all()
            .then(function (data) {
            console.log("then", data);
            _this.question = data;
            _this.shownQ = _this.question.filter(function (question) {
                return question._id.includes(_this.qId);
            });
            console.log(_this.shownQ);
            // this._router.navigate(['/browse'])    
        })
            .catch(function (error) {
            console.log("catch", error);
        });
    };
    AnswerquestionComponent.prototype.submitAnswer = function () {
        var _this = this;
        this._apiService.postAnswer(this.qId)
            .then(function (data) {
            console.log("then", data);
            _this.answers = data;
            // this.shownQ = this.question.filter((question)=>{
            //   return question._id.includes(this.qId)
            // })
            // console.log(this.shownQ)
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (error) {
            console.log("catch", error);
        });
    };
    return AnswerquestionComponent;
}());
AnswerquestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-answerquestion',
        template: __webpack_require__("../../../../../src/app/answerquestion/answerquestion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/answerquestion/answerquestion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _c || Object])
], AnswerquestionComponent);

var _a, _b, _c;
//# sourceMappingURL=answerquestion.component.js.map

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.addUser = function (userObj) {
        console.log("hit service");
        console.log(userObj);
        return this._http.post('/add', userObj).map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.addQuestion = function (qObj) {
        console.log("hit service");
        return this._http.post('/create', qObj).map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.all = function () {
        console.log("hit service");
        return this._http.get('get/all').map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getUser = function () {
        console.log("hit service");
        return this._http.get('get/user').map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.postAnswer = function (ident) {
        console.log("hit service");
        console.log(ident);
        return this._http.post('post/answer/:ident', ident).map(function (Response) { return Response.json(); }).toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newquestion_newquestion_component__ = __webpack_require__("../../../../../src/app/newquestion/newquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showquestion_showquestion_component__ = __webpack_require__("../../../../../src/app/showquestion/showquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__answerquestion_answerquestion_component__ = __webpack_require__("../../../../../src/app/answerquestion/answerquestion.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        children: []
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: []
    },
    {
        path: 'new/question',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_4__newquestion_newquestion_component__["a" /* NewquestionComponent */],
        children: []
    },
    {
        path: 'answer/:id',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_6__answerquestion_answerquestion_component__["a" /* AnswerquestionComponent */],
        children: []
    },
    {
        path: 'show/:id',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_5__showquestion_showquestion_component__["a" /* ShowquestionComponent */],
        children: []
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__newquestion_newquestion_component__ = __webpack_require__("../../../../../src/app/newquestion/newquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__showquestion_showquestion_component__ = __webpack_require__("../../../../../src/app/showquestion/showquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__answerquestion_answerquestion_component__ = __webpack_require__("../../../../../src/app/answerquestion/answerquestion.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__newquestion_newquestion_component__["a" /* NewquestionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__showquestion_showquestion_component__["a" /* ShowquestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__answerquestion_answerquestion_component__["a" /* AnswerquestionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hi, {{ user }}</h1>\n\n<a [routerLink]= \"['/new/question']\" >Add a Question</a> || <a href=\"\">Logout</a>\n\n\n<div>\n  <input type=\"text\" name=\"searchString\" #searchString = \"ngModel\" [(ngModel)] = \"stringSearch\" \n  (keyup)=\"searchNotes()\"\n>\n<input type=\"submit\" value=\"Search\">\n</div>\n\n<fieldset>\n  <table>\n    <tr>\n      <td>Question</td>\n      <td>Answers</td>\n      <td>Action</td>\n    </tr>\n    <tr *ngFor = \"let question of shownQuestions\">\n      <td> {{ question.Title }}</td>\n      <td> 0 </td>\n      <!-- <td *ngIf = \"answers.length > 0\"> {{ answers.length }} </td> -->\n      <td> <button [routerLink]= \"['/show/',question._id]\">Show</button> <button [routerLink]= \"['/answer/',question._id]\">Answer</button></td>\n    </tr>\n  </table>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_apiService) {
        this._apiService = _apiService;
        this.questions = [];
        this.shownQuestions = [];
        this.answers = [];
        this.user = "";
        this.stringSearch = "";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.getId();
    };
    DashboardComponent.prototype.getAll = function () {
        var _this = this;
        this._apiService.all()
            .then(function (data) {
            console.log("then", data);
            _this.questions = data;
            _this.shownQuestions = data;
            _this.answers = data.answers;
            // this._router.navigate(['/dashboard'])    
        })
            .catch(function (error) {
            console.log("catch", error);
        });
    };
    DashboardComponent.prototype.getId = function () {
        var _this = this;
        this._apiService.getUser()
            .then(function (data) {
            console.log("then", data);
            _this.user = data.Name;
            // this.shownQuestions = data
            // this.answers = data.answers
            // this._router.navigate(['/dashboard'])    
        })
            .catch(function (error) {
            console.log("catch", error);
        });
    };
    DashboardComponent.prototype.searchNotes = function () {
        var _this = this;
        console.log(this.stringSearch);
        this.shownQuestions = this.questions.filter(function (question) {
            return question.Title.toLowerCase().includes(_this.stringSearch);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Q&A</h1>\n\n<form (submit) = \"onSubmit()\" #logForm = \"ngForm\">\n  Name: <input type=\"text\" name=\"name\" \n  required\n  minlength=\"1\"\n  [(ngModel)] = \"logName.Name\"\n  #name = \"ngModel\"\n  >\n  <input type=\"submit\" value=\"Enter\" [disabled]=\"logForm.invalid\">\n</form>\n \n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_router, _apiService) {
        this._router = _router;
        this._apiService = _apiService;
        this.logName = { Name: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._apiService.addUser(this.logName)
            .then(function (data) {
            console.log("then", data);
            // this.logName = data
            // this.shownBikes = data
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (error) {
            console.log("catch", error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/newquestion/newquestion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newquestion/newquestion.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]= \"['/dashboard']\" >Home</a> || <a href=\"\">Logout</a>\n <h1>New Question</h1>\n\n <form (submit) = \"postQuestion()\" #questionForm = \"ngForm\">\n   Question: <input type=\"text\" name=\"pregunta\"\n   required\n   minlength=\"10\"\n   [(ngModel)]= \"question.Title\"\n   #pregunta = \"ngModel\"\n   ><p style=\"color:red\" *ngIf = \"pregunta.invalid\" class=\"invalid\"> Question must be at least 10 characters long.</p>\n   <br>\n   Description (optional): <input type=\"text\" name=\"descripcion\"\n   [(ngModel)] = \"question.Description\"\n   #descripcion = \"ngModel\"\n   >\n   <br>\n   <input type=\"Submit\" value=\"Cancel\" id=\"\">\n   <input type=\"Submit\" value=\"Submit\" [disabled] = \"questionForm.invalid\">\n </form>\n"

/***/ }),

/***/ "../../../../../src/app/newquestion/newquestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewquestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewquestionComponent = (function () {
    function NewquestionComponent(_router, _apiService) {
        this._router = _router;
        this._apiService = _apiService;
        this.question = { Title: "", Description: "" };
    }
    NewquestionComponent.prototype.ngOnInit = function () {
    };
    NewquestionComponent.prototype.postQuestion = function () {
        var _this = this;
        this._apiService.addQuestion(this.question)
            .then(function (data) {
            console.log("then", data);
            // this.logName = data
            // this.shownBikes = data
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (error) {
            console.log("catch", error);
        });
    };
    return NewquestionComponent;
}());
NewquestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-newquestion',
        template: __webpack_require__("../../../../../src/app/newquestion/newquestion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/newquestion/newquestion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], NewquestionComponent);

var _a, _b;
//# sourceMappingURL=newquestion.component.js.map

/***/ }),

/***/ "../../../../../src/app/showquestion/showquestion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/showquestion/showquestion.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]= \"['/dashboard']\">Home</a> || <a [routerLink]= \"['/answer/',qId]\"> Answer this Question</a>  || <a href=\"\">Logout</a>\n\n\n<div *ngFor = \"let question of shownQ\">\n    <h1>{{ question.Title }}</h1>\n    <h5>{{ question.Description }}</h5>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showquestion/showquestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowquestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowquestionComponent = (function () {
    function ShowquestionComponent(_route, _apiService) {
        var _this = this;
        this._route = _route;
        this._apiService = _apiService;
        this.question = [];
        this.shownQ = [];
        this._route.paramMap.subscribe(function (params) {
            _this.qId = params.get('id');
        });
    }
    ShowquestionComponent.prototype.ngOnInit = function () {
        this.obtain();
    };
    ShowquestionComponent.prototype.obtain = function () {
        var _this = this;
        this._apiService.all()
            .then(function (data) {
            console.log("then", data);
            _this.question = data;
            _this.shownQ = _this.question.filter(function (question) {
                return question._id.includes(_this.qId);
            });
            console.log(_this.shownQ);
            // this._router.navigate(['/browse'])    
        })
            .catch(function (error) {
            console.log("catch", error);
        });
    };
    return ShowquestionComponent;
}());
ShowquestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-showquestion',
        template: __webpack_require__("../../../../../src/app/showquestion/showquestion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/showquestion/showquestion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], ShowquestionComponent);

var _a, _b;
//# sourceMappingURL=showquestion.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map