import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routing } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';


import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Component/User/home/home.component';
import { LoginComponent } from './Component/User/login/login.component';
import { ProfileComponent } from './Component/User/profile/profile.component';
import { RegisterComponent } from './Component/User/register/register.component';
import { WebsiteNewComponent } from './Component/Websites/website-new/website-new.component';
import { WebsiteListComponent } from './Component/Websites/website-list/website-list.component';
import { WebsiteEditComponent } from './Component/Websites/website-edit/website-edit.component';

import { UserService } from './Services/user.service.client';
import { SharedService } from './Services/shared.service.client';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteListComponent,
    WebsiteEditComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing, 
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule, 
    MatMenuModule, MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,

  ],
  providers: [  
  UserService, 
  SharedService,
  // WebsiteService, 
  // AuthGuard
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
