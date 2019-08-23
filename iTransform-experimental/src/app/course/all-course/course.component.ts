import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { User } from 'src/app/user/user';
import { Courses } from '../course';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    courses: Array<Courses> = [];
    course: Courses;
    user: User;
    courseId: number;
    public resume:boolean =false;

    constructor(private courseService: CourseService, private fb: FormBuilder, private router: Router) { }



    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        // this.courses = this.user.course;
        console.log(this.user)
        for (let i = 0; i < this.user.course.length; i++) {
            this.courseId = this.user.course[i].courseId;
            console.log(this.courseId);
            if (this.courseId != 0) {
                this.courseService.getCourseById(this.courseId).subscribe((data) => {
                    this.course = data;
                    console.log(this.course)
                    this.courses.push(this.course);
                })
            }
        }

    }

    resumebtn() {

        debugger
        switch (localStorage.getItem("progress")) {

            case '20':
                this.router.navigateByUrl('/chapters/courseId/modules/101/0/0')

            case '40':
                this.router.navigateByUrl('/chapters/courseId/modules/101/1/0')

            case '60':
                this.router.navigateByUrl('/chapters/courseId/modules/101/1/0')

            case '80':
                this.router.navigateByUrl('/chapters/courseId/modules/101/1/1')

            case '100':
                this.router.navigateByUrl('/chapters/courseId/modules/101/1/2')
        }
    }
}
