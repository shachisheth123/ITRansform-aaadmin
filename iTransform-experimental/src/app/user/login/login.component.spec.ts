import { LoginComponent } from "./login.component";
import { DebugElement } from '@angular/core';
import { ComponentFixture, async, TestBed, inject } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('Login Form', () => {
    let comp: LoginComponent;
    let fixure: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let userService: UserService;
    let fb:  FormBuilder;
    let router: Router;
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers: [
                UserService,
                FormBuilder
            ]
        }).compileComponents().then(() => {
            fixure = TestBed.createComponent(LoginComponent);
            comp = fixure.componentInstance;
            // tslint:disable-next-line:no-unused-expression
            comp.ngOnInit();
            // comp = new LoginComponent(fb, userService, router);
            de = fixure.debugElement.query(By.css('form'));
            el = de.nativeElement;
        });
    }));

    it('form data should be valid', async(() => {
        comp.loginForm.controls['userName'].setValue('mah');
        comp.loginForm.controls['password'].setValue('abcdefg2');
        expect(comp.loginForm.valid).toBeTruthy();
        }));
    

    it('User Name field validity', () => {
        let userName = comp.loginForm.controls['userName'];
        let errors = {};
        errors = userName.errors || {};
        expect(errors['required']).toBeTruthy();

        userName.setValue('mah');
        errors = userName.errors || {};
        expect(errors['required']).toBeFalsy();
    });

    it('form data should be invalid', async(() => {
        comp.loginForm.controls['userName'].setValue('');
        comp.loginForm.controls['password'].setValue('');
        expect(comp.loginForm.valid).toBeFalsy();
    }));

    it('password field validity',() => {
        let password = comp.loginForm.controls['password'];
        let errors = {};
        password.setValue('mahvash');
        errors = password.errors || {};
        expect(errors['pattern']).toBeTruthy();
        expect(errors['required']).toBeFalsy();
         

        password.setValue('mahvash2');
        errors = password.errors || {};
        expect(password.valid).toBeTruthy();
        expect(errors['pattern']).toBeFalsy();
        expect(errors['required']).toBeFalsy();
    });
    
    // comp = new LoginComponent(fb, userService, router);
    // tslint:disable-next-line:max-line-length
    it('submiting a form emits an user',  inject([HttpTestingController, UserService], (httpMock: HttpTestingController, service: UserService )=> {
        comp.loginForm.controls['userName'].setValue('mah');
        comp.loginForm.controls['password'].setValue('mahvash2');
        expect(comp.loginForm.valid).toBeTruthy();

        let user: User;
        // tslint:disable-next-line:max-line-length
        service.getUserAuthentication('mah', 'mahvash2').subscribe((value) => {
            this.user = value;
            console.log(user.userName);
            expect(user.userName).toBe('mah');
            expect(user.password).toBe('mahvash2');
        });
        comp.onSubmit();
        

    }));

});
