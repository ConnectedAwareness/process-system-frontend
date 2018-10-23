import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login/login-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { VersionListPageComponent } from './pages/data-management/version-list/version-list-page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';

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
    component: DashboardPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'versions',
    component: VersionListPageComponent,
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
