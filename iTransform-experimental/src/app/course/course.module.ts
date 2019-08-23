import { NgModule } from '@angular/core';
import { CourseComponent } from './all-course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CourseRoute } from './course.route';
import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChaptersComponent } from './chapters/chapters.component';
import { ModuleComponent, SafePipe } from './module/module.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
    declarations: [
        CourseComponent,
        ChaptersComponent,
        QuizComponent,
        ModuleComponent,
        SafePipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(CourseRoute),
        BrowserAnimationsModule,
        MatProgressBarModule,
        HighlightJsModule
    ],
    providers:[
        CourseService,
        ChaptersComponent
    ],
    exports: [
        CourseComponent,
        QuizComponent,
        ChaptersComponent,
        ModuleComponent
    ]
})
export class CourseModule {
}
