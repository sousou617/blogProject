import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../Services/user.service.client';
import { SharedService } from '../../../Services/shared.service.client';
import { User } from '../../../Models/user.model.client';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// @ViewChild('f') 
 constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  // login: NgForm;
  username: string;
  password: string;

login() {
  const user = {
    username: this.username,
    password: this.password,
  }
}


 // login() : void {
 //   if(this.username == 'admin' && this.password == 'admin') {
 //     this.router.navigate(['home']);
 //   } else {
 //     alert('Invalid credentials');
 //   }
 // }

  ngOnInit() {
 }


}
