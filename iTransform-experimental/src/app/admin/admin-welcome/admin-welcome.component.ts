import { Component, OnInit } from "@angular/core";
import { Course } from 'src/app/user/user';
import { CourseService } from 'src/app/course/course.service';



@Component({
    templateUrl:'./admin-welcome.component.html',
    styleUrls: ['./admin-welcome.component.css']
})
export class AdminWelcomeComponent implements OnInit{

    course:Course;

    constructor(private courseService:CourseService){}


    ngOnInit(){

    }

    
}