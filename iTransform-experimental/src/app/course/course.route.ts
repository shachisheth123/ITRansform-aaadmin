import { Routes } from '@angular/router';
import { CourseComponent } from './all-course/course.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ModuleComponent } from './module/module.component';
import { QuizComponent } from './quiz/quiz.component';

export const CourseRoute: Routes = [
    {path : 'courses', component: CourseComponent},
    {path : 'chapters/:courseId', component: ChaptersComponent,
        children:[
            {path: "modules/:coursesId/:chapterId/:moduleId", component: ModuleComponent},
            {path: "quiz/:coursesId/:chapterId/:quizId", component: QuizComponent}
        ]},
    

];
