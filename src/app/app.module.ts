import { AsideCategoryComponent } from './components/asideCategory/asideCategory.component';
import { SurveyPageComponent } from './pages/surveyPage/surveyPage.component';
import { ConnecteePageComponent } from './pages/connecteePage/connecteePage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginService } from './services/login.service';
import { AdminPageComponent } from './pages/adminPage/adminPage.component';
import { HttpModule } from '@angular/http';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    NavigationComponent,
    ConnecteePageComponent,
    SurveyPageComponent,
    AsideCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
