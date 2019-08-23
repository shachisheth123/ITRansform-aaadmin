import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Courses, ChapterModule } from 'src/app/course/course';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/course/course.service';

@Component({
    templateUrl: 'admin-NewModule.component.html',
    styleUrls: ['admin-NewModule.component.css']
})
export class AdminNewModuleComponent {


    course: Courses;
    chapterModule: ChapterModule;
    courses: Courses[];
    adminModuleForm: FormGroup;

    constructor(private courseService: CourseService, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        console.log(this.courses)
        this.adminModuleForm = this.fb.group({

             title: ['', Validators.required],
            description: ['', Validators.required],
            subtitle: ['', Validators.required],
            subdescription: ['', Validators.required],
            codesnippet: ['', Validators.required],
            youtubelink: ['', Validators.required]

        });

        console.log(this.course)

    }

    addNewModule() {

        debugger
        this.courseService.addNewCourse(this.course).subscribe(

            () => {
                console.log(this.course)
                console.log(this.chapterModule)
                this.router.navigate(["/adminwelcome"])

                console.log('module added')

                alert('added module')

                console.log(this.course)

            }
        )


    }


    // updateModule(){

    //     this.courseService.updateCourse(this.courses).subscribe(
    //         ()=>{

    //             this.courses.push(this.course)
    //             console.log(this.course)

    //         }
    //     )


    // }

    get title() { return this.adminModuleForm.get('title'); }
    get description() { return this.adminModuleForm.get('description'); }
    get subtitle() { return this.adminModuleForm.get('subtitle'); }
    get subdescription() { return this.adminModuleForm.get('subdescription'); }
    get codesnippet() { return this.adminModuleForm.get('codesnippet'); }
    get youtubelink() { return this.adminModuleForm.get('youtubelink'); }

}