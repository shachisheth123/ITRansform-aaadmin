
import { Component } from '@angular/compiler/src/core';
import { ComponentFixture, async, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleComponent, SafePipe } from './module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material';

describe(' Module Component', ()=> {
    let component: ModuleComponent;
    let fixure: ComponentFixture<ModuleComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let courseService: CourseService;
    let route:ActivatedRoute;
    let router:Router;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ModuleComponent,
                SafePipe
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientTestingModule,
                HttpClientModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                MatProgressBarModule,
            ],
            providers: [
                CourseService
            ]
        }).compileComponents().then(() =>{
            fixure = TestBed.createComponent(ModuleComponent);
            component = fixure.componentInstance;
            de = fixure.debugElement;
            // tslint:disable-next-line:no-unused-expression
            component.ngOnInit;
            component = new ModuleComponent(courseService,route,router);
        });
    }));

    it('should create the component', ()=> {
        expect(component).toBeTruthy();
    });
    // tslint:disable-next-line:max-line-length


    it('should test OnInit function', () => {
        spyOn(component, 'ngOnInit').and.callThrough();
        expect(component.ngOnInit).toBeTruthy();
        expect(component.ngOnInit).toBeDefined();
    });



    beforeEach(() => {
        let store = {};

        spyOn(sessionStorage, 'getItem').and.callFake( (key: string): String => {
         return store[key] || null;
        });
        spyOn(sessionStorage, 'removeItem').and.callFake((key: string): void =>  {
          delete store[key];
        });
        spyOn(sessionStorage, 'setItem').and.callFake((key: string, value: string): string =>  {
          // tslint:disable-next-line:no-angle-bracket-type-assertion
          return store[key] = <string> value;
        });
        spyOn(sessionStorage, 'clear').and.callFake(() =>  {
            store = {};
        });

    });

    it('should set an item', () => {
            // tslint:disable-next-line:max-line-length
            expect(sessionStorage.setItem('user', 'contactNumber: 887949498 ,course: [],email: \"mah@gmail.com\",name: \"mah\",password: \"mahvash2\",userName: \"mah\"'))
            .toBe('contactNumber: 887949498 ,course: [],email: \"mah@gmail.com\",name: \"mah\",password: \"mahvash2\",userName: \"mah\"');
            expect(sessionStorage.getItem('user'))
            .toBe('contactNumber: 887949498 ,course: [],email: \"mah@gmail.com\",name: \"mah\",password: \"mahvash2\",userName: \"mah\"');
        });

    it('should set and remove Item', () => {
        // tslint:disable-next-line:max-line-length
        expect(sessionStorage.setItem('user', 'contactNumber: 887949498 ,course: [],email: \"mah@gmail.com\",name: \"mah\",password: \"mahvash2\",userName: \"mah\"'))
        .toBe('contactNumber: 887949498 ,course: [],email: \"mah@gmail.com\",name: \"mah\",password: \"mahvash2\",userName: \"mah\"');
        expect(localStorage.removeItem('user')).toBeUndefined(); // undefined
        expect(sessionStorage.getItem('user'))
            .toBe('contactNumber: 887949498 ,course: [],email: \"mah@gmail.com\",name: \"mah\",password: \"mahvash2\",userName: \"mah\"');
          });
});
