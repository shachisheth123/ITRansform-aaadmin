import { RegistrationComponent } from './registration.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseService } from 'src/app/course/course.service';



describe('Registration Form', () => {
    let comp: RegistrationComponent;
    let fixure: ComponentFixture<RegistrationComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RegistrationComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers: [
                FormBuilder,
                UserService,
                CourseService
            ]
        }).compileComponents().then(() => {
            fixure = TestBed.createComponent(RegistrationComponent);
            comp = fixure.componentInstance;
            comp.ngOnInit();
            de = fixure.debugElement.query(By.css('form'));
            el = de.nativeElement;
        });
    }));
    it('form data should be valid', async(() => {
        comp.registrationForm.controls['userName'].setValue('mahv');
        comp.registrationForm.controls['name'].setValue('mah');
        comp.registrationForm.controls['email'].setValue('mah@gmail.com');
        comp.registrationForm.controls['contactNumber'].setValue('8879494986');
        comp.registrationForm.controls['password'].setValue('abcdefg2');
        expect(comp.registrationForm.valid).toBeTruthy();
       
        }));

    
    it('User Name field validity', () => {
        let userName = comp.registrationForm.controls['userName'];
        let errors = {};
        errors = userName.errors || {};
        expect(errors['required']).toBeTruthy();

        userName.setValue('mamomin');
        errors = userName.errors || {};
        expect(errors['required']).toBeFalsy();
    });
    
    it('name field validity', ()=> {
        let name = comp.registrationForm.controls['name'];
        let errors = {};
        errors = name.errors || {};
        expect(errors['required']).toBeTruthy();

        name.setValue('mahvash momin');
        errors = name.errors || {};
        expect(errors['required']).toBeFalsy();
    });

    it('email field validity', ()=> {
        let email = comp.registrationForm.controls['email'];
        let errors = {};
        errors = email.errors || {};
        expect(errors['required']).toBeTruthy();

        email.setValue('mah@');
        errors = email.errors || {};
        expect(errors['pattern']).toBeTruthy();
        expect(errors['required']).toBeFalsy();

        email.setValue('mah@gmail.com');
        errors = email.errors || {};
        expect(email.valid).toBeTruthy();
        expect(errors['pattern']).toBeFalsy();
        expect(errors['required']).toBeFalsy();

    });

    it('contact field validity', ()=> {
        let contactNumber = comp.registrationForm.controls['contactNumber'];
        let errors = {};
        errors = contactNumber.errors || {};
        expect(errors['required']).toBeTruthy();

        contactNumber.setValue('99748378289');
        errors = contactNumber.errors || {};
        expect(errors['pattern']).toBeTruthy();
        expect(errors['required']).toBeFalsy();

        contactNumber.setValue('8879494986');
        errors = contactNumber.errors || {};
        expect(contactNumber.valid).toBeTruthy();
        expect(errors['pattern']).toBeFalsy();
        expect(errors['required']).toBeFalsy();

    });
        
    it('password field validity',() => {
            let password = comp.registrationForm.controls['password'];
            let errors = {};
            password.setValue('abcdgd');
            errors = password.errors || {};
            expect(errors['pattern']).toBeTruthy();
            expect(errors['required']).toBeFalsy();
             

            password.setValue('mahvash2');
            errors = password.errors || {};
            expect(password.valid).toBeTruthy();
            expect(errors['pattern']).toBeFalsy();
            expect(errors['required']).toBeFalsy();
        });
    


    it('form data should be invalid', async(() => {
        comp.registrationForm.controls['userName'].setValue('');
        comp.registrationForm.controls['name'].setValue('');
        comp.registrationForm.controls['email'].setValue('');
        comp.registrationForm.controls['contactNumber'].setValue('');
        comp.registrationForm.controls['password'].setValue('');
        expect(comp.registrationForm.valid).toBeFalsy();
    }));

});
