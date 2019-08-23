import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/course/course.service';
import { Courses, CourseChapter } from 'src/app/course/course';


@Component({

    templateUrl: 'admin-newChapter.component.html',
    styleUrls: ['admin-newChapter.component.css']
})
export class AdminNewChapterComponent {

    adminnewchapterform: FormGroup;
    courses: Courses[];
    courseChapters: CourseChapter[];
    course: Courses;

    constructor(private http: HttpClient, private courseService: CourseService, private fb: FormBuilder, private router: Router) { }

    ngOnInit() {

        debugger
        console.log(this.courseChapters)
        console.log('here')
        this.adminnewchapterform = this.fb.group({

            chapterName: ['', Validators.required],
            moduleName: ['', Validators.required]

        });

        console.log('done')
        console.log(this.courseChapters)

    }

    addNewChapter() {

        debugger
        this.courseService.addNewCourse(this.course).subscribe(
            () => {
                debugger
                this.courses.push(this.course)
                this.router.navigate(["/addmodule"])
                console.log(this.course)
                console.log(this.courseChapters)
                console.log('chapter added')
                console.log(this.chapterName)
                console.log(this.moduleName)

            })
     
    }


    get chapterName() { return this.adminnewchapterform.get("chapterName"); }
    get moduleName() { return this.adminnewchapterform.get("moduleName"); }

}



