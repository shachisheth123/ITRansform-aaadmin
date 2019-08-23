
import { Component } from '@angular/compiler/src/core';
import { ComponentFixture, async, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseComponent } from './course.component';
import { CourseService } from '../course.service';

describe(' Course Component', ()=> {
    let component: CourseComponent;
    let fixure: ComponentFixture<CourseComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let courseService: CourseService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CourseComponent
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
            fixure = TestBed.createComponent(CourseComponent);
            component = fixure.componentInstance;
            de = fixure.debugElement;
            // tslint:disable-next-line:no-unused-expression
            component.ngOnInit;
            component = new CourseComponent(courseService);
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

    // tslint:disable-next-line:max-line-length
    // it('should display all courses', inject([HttpTestingController, CourseService], (httpMock: HttpTestingController, service: CourseService) => {
    //         fixure.detectChanges();
    //         service.getCourseById(101).subscribe((data) => {
    //                 component.course = data;
    //                 const card = de.query(By.css('.course-card'));
    //                 const courseName = card.query(By.css('.course-name'));
    //                 expect(card).toBeTruthy();
    //                 expect(courseName.nativeElement.textContent).toBe(data[0].courseName);
    
    
    //         });  
    
    //     }));
});
