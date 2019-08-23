import { Component, OnInit } from '@angular/core';
import { User } from './user/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user: User;
  constructor(private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));

    if (this.user != null) {
    console.log('hello');
    console.log(this.user);
    document.getElementById('loginbtn').style.display = 'none';
    document.getElementById('signupbtn').style.display = 'none';
    
}
  }

  logout() {
    sessionStorage.removeItem('user');
  }
  
}
