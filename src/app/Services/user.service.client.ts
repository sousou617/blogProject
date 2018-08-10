import { Injectable } from '@angular/core';
import { User } from '../Models/user.model.client';
import { Http, Response, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { SharedService } from './shared.service.client';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private sharedService: SharedService, private router: Router, private http: Http) { }


loginForm(defaultFormEmail: String, defaultFormPass: String) {
 // this.options.withCredentials = true; // jga
 const user = {
   email : defaultFormEmail,
   password : defaultFormPass
 };
 // console.log(this.baseUrl);
//  return this.http.post(this.baseUrl + '/api/login', user, this.options).pipe(map(
//      (res: Response) => {
//        return res.json();
//      }
//    ));
}




}
