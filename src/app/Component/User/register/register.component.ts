import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../Services/user.service.client';
import {SharedService} from '../../../Services/shared.service.client';
import { User } from '../../../Models/user.model.client';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	@ViewChild('f') registerForm: NgForm;

	username: string;
	password: string;
	verifyPassword: string;
	passwordError: boolean;
	usernameError: boolean;


  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.passwordError = false;
    this.usernameError = false;
  }

  register(){
    this.ngOnInit();
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    
    if(this.password !== this.verifyPassword) {
        this.passwordError = true;
    } else {
        this.passwordError = false;
        this.userService.findUserByUsername(this.username).subscribe(
            (data: any) => {
                if(!data) {
        this.userService.register(this.username, this.password).subscribe(
                    (data: User) => {
                      this.sharedService.user = data;
                      this.router.navigate(['/user']);
                    },
                  (error: any) => {
                    this.usernameError = true;
                  }
                );
                } else {
                    this.usernameError = true;
                }
            }
        )
    }
  }

}