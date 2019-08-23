import { Routes } from "@angular/router";
import { WelcomeCourseComponent } from './welcome-course.component';
import { WelcomeChapterComponent } from './welcome-chapter/welcome-chapter.component';
import { RegistrationComponent } from '../user/registration/registration.component';

export const welcomeCourseRoute: Routes = [
    {path: 'welcomecourse', component: WelcomeCourseComponent},
    {path: 'welcomechapter/:courseId', component: WelcomeChapterComponent},
    {path: 'signup/:courseId', component: RegistrationComponent}
];