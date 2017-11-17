import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { ShowquestionComponent } from './showquestion/showquestion.component';
import { AnswerquestionComponent } from './answerquestion/answerquestion.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: []
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    children: []
  },
  {
    path: 'new/question',
    pathMatch: 'full',
    component: NewquestionComponent,
    children: []
  },
  {
    path: 'answer/:id',
    pathMatch: 'full',
    component: AnswerquestionComponent,
    children: []
  },
  {
    path: 'show/:id',
    pathMatch: 'full',
    component: ShowquestionComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
