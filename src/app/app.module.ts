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
import { AuthentificationService } from './shared/services/authentification.service';
import { OrganisationService } from './shared/services/organisation.service';
import { UserService } from './shared/services/user.service';
import { DynamicModule } from './shared/data-mgmt/dynamic/dynamic.module';

// Pages
import { StartPageComponent } from '../pages/start-page/start-page.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    MainPageComponent,
    NavigationComponent
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
  providers: [AuthentificationService, OrganisationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
