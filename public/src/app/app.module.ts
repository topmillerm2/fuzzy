import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ApiService } from './api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { ShowquestionComponent } from './showquestion/showquestion.component';
import { AnswerquestionComponent } from './answerquestion/answerquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewquestionComponent,
    ShowquestionComponent,
    AnswerquestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
