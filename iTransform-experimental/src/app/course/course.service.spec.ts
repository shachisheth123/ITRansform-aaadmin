import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('Course Service', () => {
    let injector: TestBed;
    let service: CourseService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [
                CourseService,
                {provide: Router,  useClass:  class { navigate = jasmine.createSpy('navigate'); } }
            ]
        });
        injector = getTestBed();
        service = injector.get(CourseService);
        httpMock = injector.get(HttpTestingController);
    });
    describe('findAllCourse', () => {
        it('should return all the courses', () => {
            service.findAllCourses().subscribe((data) => {
                expect(data[0].courseName).toEqual('Core Java');
                expect(data[0].courseChapter[0].chapterName).toEqual('Java Basics');
            });
            const req = httpMock.expectOne('http://localhost:8084/course');
            expect(req.request.method).toBe('GET');
        });
    });
});