import { TestBed , getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';


describe('UserSevice', () => {
    let injector: TestBed;
    let service: UserService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule,
                    RouterTestingModule],
            providers: [UserService,
                {provide: Router,  useClass:  class { navigate = jasmine.createSpy('navigate'); } }]
        });
        injector = getTestBed();
        service = injector.get(UserService);
        httpMock = injector.get(HttpTestingController);

    });
    describe('#getUserAuthentication', () => {
        it('should return username and password', () => {
            service.getUserAuthentication('userName', 'password').subscribe( (user) => {
                expect(user.userName).toEqual('mah');
                expect(user.password).toEqual('12345678');
            });

            const req = httpMock.expectOne('http://localhost:8083/user/userName/password');
            expect(req.request.method).toBe('GET');
        });
    });

    describe('#addNewUser', () => {
        const mockUser = {
            userName: 'mah',
            name: 'mah',
            email: 'mah@gmail.com',
            contactNumber : 8879494986,
            password : 'mahvash21',
            course: []
        };

        it('should add new user', () => {
            service.addNewUser(mockUser,101).subscribe((data) => {
                expect(data.userName).toEqual('mah');
                expect(data.name).toEqual('mah');
            });
            const req = httpMock.expectOne('http://localhost:8083/user/101');
            expect(req.request.method).toBe('POST');

            req.flush(mockUser);
        });
    });

    describe('#getAllCourses', () => {
        it('should  return all the courses', () => {
            service.getAllCourses().subscribe((data) => {
                expect(data[0].courseName).toEqual('Core Java');
                expect(data[0].courseChapter[0].chapterName).toEqual('Java Basics');
            });
            const req = httpMock.expectOne('http://localhost:8084/course');
            expect(req.request.method).toBe('GET');
        });
    });
});


