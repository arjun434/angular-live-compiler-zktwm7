import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
  }

}