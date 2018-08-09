import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main/main-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [AuthGuard]
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
