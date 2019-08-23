import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Courses } from 'src/app/course/course';
import { User, Course } from '../user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/course/course.service';


@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    constructor(private fb: FormBuilder,
        private userService: UserService, private router: Router,
        private courseService: CourseService,
        private route: ActivatedRoute) {
    }

    users:User[];
    user: User;
    course: Courses[];
    cours: Course;
    registrationForm: FormGroup;
    submitted = false;
    courseId: number = 0;
    array: Array<Course> = [];

    ngOnInit() {
        this.cours = new Course;
        this.user = new User();
        this.userService.getAllCourses().subscribe((data) => {
            this.course = data;
            console.log(this.course);
        });

        this.registrationForm = this.fb.group({

            userName: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
            password: ['', [ Validators.required, Validators.pattern('^(?=.*[0-9]).{8}$')]]
        });
    }

    flag:boolean= false;
    registerNewUser() {
        console.log(this.registrationForm.value.userName)
        this.userService.getAllUser().subscribe((data) => {
            this.users = data;
            console.log(this.users)
            for(let i=0;i<this.users.length;i++){
                if(this.users[i].userName == this.registrationForm.value.userName){
                    this.flag= true;
                }
            }
            
            if (this.flag == false) {
                this.route.paramMap.subscribe((map) => {
                    this.courseId = Number(map.get("courseId"));

                    this.userService.addNewUser(this.registrationForm.value, this.courseId).subscribe((data) => {
                        this.user = data;

                        this.courseService.updateUserCourse(this.user).subscribe((data) => {

                            if (this.user.contactNumber == 0 && this.user.name == '' && this.user.email == '' && this.user.password == "" && this.user.userName == "") {
                                alert("Registration is unsuccessful");
                            }
                            else {
                                this.submitted = true;
                                alert("Registration is successful");
                                this.router.navigate(["/login"]);
                            }
                        })
                    })
                })
            } else {
                alert("user is already available please login");
                this.router.navigate(["/login"]);
            }
        })

    }

    get userName() { return this.registrationForm.get("userName"); }
    get name() { return this.registrationForm.get("name"); }
    get email() { return this.registrationForm.get("email"); }
    get password() { return this.registrationForm.get("password"); }
    get contactNumber() { return this.registrationForm.get("contactNumber"); }


    // get name() { return this.registrationForm.controls.name; }
    // get email() { return this.registrationForm.controls.email; }
    // get password() { return this.registrationForm.controls.password; }
    // get contactNumber() { return this.registrationForm.controls.contactNumber; }

}
