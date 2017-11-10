import { SurveyPageComponent } from './pages/surveyPage/surveyPage.component';
import { ConnecteePageComponent } from './pages/connecteePage/connecteePage.component';
import { AdminPageComponent } from './pages/adminPage/adminPage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'connectee',
    component: ConnecteePageComponent
  },
  {
    path: 'connectee/survey',
    component: SurveyPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'connector',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
