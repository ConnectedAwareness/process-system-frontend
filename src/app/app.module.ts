import { AuthService } from './shared/services/auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

// only for development
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicModule } from './shared/data-mgmt/dynamic/dynamic.module';

// Pages
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { MainPageComponent } from './pages/main/main-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { EditComponent } from './shared/components/edit/edit.component';
import { VersionListPageComponent } from './pages/data-management/version-list/version-list-page.component';

const pageComponents = [
  MainPageComponent,
  LoginPageComponent,
  ProfilePageComponent,
  VersionListPageComponent
]

@NgModule({
  declarations: [
    AppComponent,
    pageComponents,
    NavigationComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    AppRoutingModule,
    CookieModule.forRoot(),
    DynamicModule
  ],
  entryComponents: [],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
