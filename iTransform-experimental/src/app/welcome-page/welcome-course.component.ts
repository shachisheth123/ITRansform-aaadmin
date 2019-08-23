import { Component, OnInit } from '@angular/core';
import { Courses } from '../course/course';
import { User } from '../user/user';
import { CourseService } from '../course/course.service';

@Component({
    templateUrl: './welcome-course.component.html',
    styleUrls: ['./welcome-course.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class WelcomeCourseComponent implements OnInit {
    courses: Array<Courses> = [];
    course: Courses;
    user: User;
    courseId: number;
    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        // this.courses = this.user.course;
        
        // tslint:disable-next-line:prefer-for-of
        this.courseService.findAllCourses().subscribe((data) => {
                this.courses = data;
                console.log(data);
        });

    }
}