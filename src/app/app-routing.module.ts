import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './Services/auth-guard.services';

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserService } from './Services/user.service.client';

import { AppComponent } from './app.component';
import { HomeComponent } from './Component/User/home/home.component';
import { LoginComponent } from './Component/User/login/login.component';
import { ProfileComponent } from './Component/User/profile/profile.component';
import { RegisterComponent } from './Component/User/register/register.component';
import { WebsiteNewComponent } from './Component/Websites/website-new/website-new.component';
import { WebsiteListComponent } from './Component/Websites/website-list/website-list.component';
import { WebsiteEditComponent } from './Component/Websites/website-edit/website-edit.component';
import { PageEditComponent } from './Component/Page/page-edit/page-edit.component';
import { PageListComponent } from './Component/Page/page-list/page-list.component';
import { PageNewComponent } from './Component/Page/page-new/page-new.component';



const APP_ROUTES : Routes = [
  { path : '' , redirectTo: '/home', pathMatch: 'full'},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent},
  { path : 'user', component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'home' , component: HomeComponent},
  { path : 'user/:uid/website' , component: WebsiteListComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/new' , component: WebsiteNewComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid' , component: WebsiteEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page', component : PageListComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/new', component : PageNewComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid', component : PageEditComponent, canActivate: [AuthGuard]},
  ];

// @NgModule({
// 	imports: [RouterModule.forRoot(routes)],
// 	exports: [RouterModule]
// })

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
// export class AppRoutingModule { }
