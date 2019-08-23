import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User, Authenticate } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User;
    auth: Authenticate;
    inavlidLogin=false;

    constructor(private fb: FormBuilder, private userService: UserService,
                private router: Router) {
            this.auth = new Authenticate();
        }
        // @Output() loggedIn = new EventEmitter<User>();

        loginForm: FormGroup;
        ngOnInit() {

            console.log(this.user)
            this.loginForm = this.fb.group({
                userName : ['', Validators.required],
                password : ['', [ Validators.required, Validators.pattern('^(?=.*[0-9]).{8}$')]]
            });
        }
        
    onSubmit() {
      console.log(this.user);
        // if(this.loginForm.value.userName == "admin" && this.loginForm.value.password == "admin123"){
        //     this.router.navigate(['/adminwelcome']);
        // }else{
            this.userService.getUserAuthentication(this.loginForm.value.userName, this.loginForm.value.password).subscribe((data) => {
                this.user = data;
                console.log(data);
                // if (this.user != null) {
                //         sessionStorage.setItem("user", JSON.stringify(this.user));
                //         this.router.navigate(['/courses']);
                //         window.location.href = '/courses';
                // } else {
                //     alert('please enter correct userName and password');
                //     this.router.navigate(['/login']);
                // }
                if (this.user != null) {
                    // this.invalidLogin = this.userService.getUserAuthentication(true,userName);
                    if(data.userName == "admin" && data.password == "admin123"){
                      sessionStorage.setItem('user',JSON.stringify(this.user));
                      alert('logging in') 
                      this.router.navigate(["adminwelcome"]);
                      window.location.href='/adminwelcome';
                    }
                    else {
                      sessionStorage.setItem('user',JSON.stringify(this.user));
                      alert('logging in') 
                      this.router.navigate(["courses"]);
                      window.location.href='/courses';
                    }
                  }
                  else{
                    alert("Invalid username or password");
                    this.inavlidLogin = true;
                  }
                },(err) => {
                  
                  alert("Invalid credentials");
                  this.user.userName = "";
                  this.user.password = "";
                  
                });
    
            // });
        // }


    }

    get userName() { return this.loginForm.get("userName"); }
    get password() { return this.loginForm.get("password"); }

}
