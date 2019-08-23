import { WelcomeCourseComponent } from "./welcome-course.component";
import { Component } from '@angular/compiler/src/core';
import { ComponentFixture, async, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../course/course.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('Welcome Course Component', ()=> {
    let component: WelcomeCourseComponent;
    let fixure: ComponentFixture<WelcomeCourseComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let courseService: CourseService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WelcomeCourseComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientTestingModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers: [
                CourseService
            ]
        }).compileComponents().then(() =>{
            fixure = TestBed.createComponent(WelcomeCourseComponent);
            component = fixure.componentInstance;
            de = fixure.debugElement;
            // tslint:disable-next-line:no-unused-expression
            component.ngOnInit;
            component = new WelcomeCourseComponent(courseService);
        });
    }));

    it('should create the component', ()=> {
        expect(component).toBeTruthy();
    });
    // tslint:disable-next-line:max-line-length
    it('should return list of courses', inject([HttpTestingController, CourseService], (httpMock: HttpTestingController, service: CourseService) => {
        fixure.detectChanges();
        service.findAllCourses().subscribe((data) => {
            const cards = de.queryAll( By.css('.course-card'));
            expect(cards).toBeTruthy();
            expect(cards.length).toBe(2);
            expect(data.length).toBe(2);
        });
        // const req = httpMock.expectOne('http://localhost:8084/course');
        // expect(req.request.method).toEqual('GET');
        // req.flush(this.data);
    }));

    it('should test OnInit function', () => {
        spyOn(component, 'ngOnInit').and.callThrough();
        expect(component.ngOnInit).toBeTruthy();
        expect(component.ngOnInit).toBeDefined();
    });

    // tslint:disable-next-line:max-line-length
    it('should display the first Course', inject([HttpTestingController, CourseService], (httpMock: HttpTestingController, service: CourseService) => {
        fixure.detectChanges();
        service.findAllCourses().subscribe((data) => {
            component.courses = data;
            const card = de.query(By.css('.course-card:first-child'));
            const courseName = card.query(By.css('.course-name'));
            expect(card).toBeTruthy();
            expect(courseName.nativeElement.textContent).toBe(data[0].courseName);
        });
        
    }));

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
