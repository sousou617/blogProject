import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routing } from './app-routing.module';
import { HttpModule } from '@angular/http';

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
    // PageNewComponent,
    // PageEditComponent,
    // PageListComponent,
    // WidgetChooserComponent,
    // WidgetEditComponent,
    // WidgetListComponent,
    // WidgetHeaderComponent,
    // WidgetImageComponent,
    // WidgetYoutubeComponent,
    // FlickrImageSearchComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing, 
    MDBBootstrapModule.forRoot(),
  
  ],
  providers: [  
  UserService, 
  SharedService,
  // WebsiteService, 
  // PageService, 

  // WidgetService, 
  // FlickrService, 
 
  // AuthGuard 
  // AdminGuard
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
