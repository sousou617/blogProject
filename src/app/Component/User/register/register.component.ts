import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/user.model.client';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user: User;
  // emailPattern =  "/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]*\.([a-z]{2,4})$/";

  constructor() { }

  ngOnInit() {
   }

}
