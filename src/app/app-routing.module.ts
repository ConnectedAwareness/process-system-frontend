import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent } from '../pages/start-page/start-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  }
  // ,
  // {
  //   path: 'main',
  //   component: MainPageComponent
  // },
  // {
  //   path: 'organisations',
  //   component: OrganisationListPageComponent
  // },
  // {
  //   path: 'organisations/:id',
  //   component: OrganisationPageComponent
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
