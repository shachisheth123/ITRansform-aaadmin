import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { Courses } from 'src/app/course/course';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CourseService } from 'src/app/course/course.service';


@Component({
    templateUrl: './Admin-newcourse.component.html',
    styleUrls: ['./admin-newcourse.component.css']
})
export class AdminNewCourseComponent implements OnInit {

    course: Courses;
    courses: Courses[];
    constructor(private http: HttpClient, private courseService: CourseService, private fb: FormBuilder, private router: Router) { }

    adminWelcomeForm: FormGroup;
    ngOnInit() {


        console.log(this.course)
        this.adminWelcomeForm = this.fb.group({

            courseName : ['' , Validators.required],
            courseImage : ['',Validators.required],
            // course: this.fb.array([this.addCourseGroup()]),


        });


        // this.adminService.addNewCourse(this.course).subscribe((data) => {
        //     this.courses = data;
        //     console.log(this.course)
        //     this.courses.push(this.course);
        //     console.log(this.course)
        // })

        // this.course = new Courses();

    }

    // addCourseGroup(): FormGroup {
    //     return this.fb.group({

    //         courseName: ['', Validators.required],
    //         courseImage: ['', Validators.required],


    //     })
    // }

    addCourses() {

        this.courseService.addNewCourse(this.course).subscribe(

            () => {
                this.courses.push(this.course);
                this.router.navigate(['/addchapter'])
            });


        console.log(this.course)
        alert('new')

    }

    // removeCourses(index) {
    //     this.courseArray.removeAt(index);
    // }
    
    submitHandler() {

        this.courseService.addNewCourse(this.course).subscribe(

            () => {
                this.courses.push(this.course);
                this.router.navigate(['adminwelcome'])


            });
        alert('added')
        console.log(this.adminWelcomeForm.value);
        alert("done")
    }

    //  get courseArray() { return <FormArray>this.adminWelcomeForm.get("course") }
    get courseName() { return this.adminWelcomeForm.get("courseName"); }
    get courseImage(){return this.adminWelcomeForm.get("courseImage")}
   
}