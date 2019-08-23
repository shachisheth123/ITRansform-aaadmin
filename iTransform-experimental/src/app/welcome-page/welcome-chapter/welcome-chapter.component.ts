import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/course/course';
import { CourseService } from 'src/app/course/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Course } from 'src/app/user/user';
import { allSettled } from 'q';

@Component({
    templateUrl: './welcome-chapter.component.html',
    styleUrls: ['./welcome-chapter.component.css']
})
export class WelcomeChapterComponent implements OnInit {

    course: Courses;
    user: User;
    cours: Course;
    flag: boolean = false;
    constructor(private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router) { }


    ngOnInit() {
        this.cours = new Course();


        this.user = JSON.parse(sessionStorage.getItem("user"));
        if (this.user == null) {
            this.flag = true;
        }
        this.route.paramMap.subscribe((map) => {
            // tslint:disable-next-line:prefer-const
            let courseId = map.get('courseId');
            // tslint:disable-next-line:prefer-const
            let cId = Number(courseId);
            this.courseService.getCourseById(cId).subscribe((data) => {
                this.course = data;
                console.log(data);
            });
        });
    }

    available: boolean = false;
    addCourse(courseId: number) {
        console.log(courseId)
        this.cours.courseId = courseId;
        this.cours.moduleComplete.push("0");
        for (let i = 0; i < this.user.course.length; i++) {
            if (this.user.course[i].courseId == courseId) {
                this.available = true;
            } else {
                this.available = false;
            }
        }

        if (this.available) {
            alert("you have already added this course");
            this.router.navigate(["/courses"]);
        } else {
            this.user.course.push(this.cours)
            for (let i = 0; i < this.user.course.length; i++) {
                if (this.user.course[i].courseId == 0) {
                    this.user.course.shift();
                }
            }
            this.courseService.updateUserCourse(this.user).subscribe((data) => {
                this.user = data;
                sessionStorage.setItem("user", JSON.stringify(this.user))
            })
            alert("course added successfully");
            this.router.navigate(["/courses"]);
        }
    }
}