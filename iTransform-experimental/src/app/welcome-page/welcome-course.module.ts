import { NgModule } from '@angular/core';
import { WelcomeCourseComponent } from './welcome-course.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { welcomeCourseRoute } from './welcome-course.route';
import { WelcomeChapterComponent } from './welcome-chapter/welcome-chapter.component';


@NgModule({
    declarations: [
        WelcomeCourseComponent,
        WelcomeChapterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(welcomeCourseRoute)
    ],
    exports : [
        WelcomeCourseComponent
    ]

})
export class WelcomeCourseModule {

}