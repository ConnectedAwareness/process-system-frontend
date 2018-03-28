import { LogService } from './login/services/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatDialogModule, MatInputModule } from '@angular/material';

// only for development
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserDetailComponent } from './user/components/user-detail/user-detail.component';
import { UserService } from './user/services/user.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginDialogComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatDialogModule, MatInputModule, AppRoutingModule,
    AppRoutingModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [
    UserService,
    LogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
