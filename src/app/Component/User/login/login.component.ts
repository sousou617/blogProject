import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../Services/user.service.client';
import { SharedService } from '../../../Services/shared.service.client';
import { User } from '../../../Models/user.model.client';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;

  
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  
  // loginForm: FormGroup; constructor(private fb: FormBuilder) {
  //   this.loginForm = fb.group({
  //       defaultFormEmail: ['', Validators.required],
  //       defaultFormPass: ['', [Validators.required, Validators.minLength(8)]]
  //     });
  // }


  ngOnInit() {
    
  }

  loginForm() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // console.log('data', this.username);
    this.userService.loginForm(this.username, this.password).subscribe(
      (user: User) => {
        if(!user) {
          this.errorFlag = true;
        } else {
          this.errorFlag = false;
          this.sharedService.user = user;
          this.router.navigate(['user']);
        }
      },
      (error: any) => {
        this.errorFlag = true;
      }
    );
  }

}
