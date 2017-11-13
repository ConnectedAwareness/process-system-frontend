import { CoordinatorPageComponent } from './pages/coordinatorPage/coordinatorPage.component';
import { ConnectorPageComponent } from './pages/connectorPage/connectorPage.component';
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
    children: [
      {path: '', component: ConnecteePageComponent},
      {path: 'survey', component: SurveyPageComponent}
    ]
  },
  {
    path: 'connector',
    children: [
      {path: '', component: ConnectorPageComponent},
    ]
  },
  {
    path: 'coordinator',
    children: [
      {path: '', component: CoordinatorPageComponent},
    ]
  },
  {
    path: 'admin',
    children: [
      {path: '', component: AdminPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
