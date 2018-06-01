import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent } from './pages/start-page/start-page.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OrganisationsPageComponent } from './pages/list-pages/organisations-page/organisations-page.component';

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
    path: 'organisations',
    component: OrganisationsPageComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
