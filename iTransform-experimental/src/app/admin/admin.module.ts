import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from '../course/course.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from '../user/user.module';
import { WelcomeCourseModule } from '../welcome-page/welcome-course.module';
import { RouterModule } from '@angular/router';
import { appRoute } from '../app.route';
import { adminComponent } from './admin.component';
import { CourseService } from '../course/course.service';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { AdminNewCourseComponent } from './admin-newcourse/admin-newcourse.component';
import { AdminNewChapterComponent } from './admin-newChapter/admin-newChapter.component';
import { AdminNewModuleComponent } from './admin-newModule/admin-newModule.component';
import { Quizcomponent } from './admin-newQuiz/admin-newquiz.component';


@NgModule({
  declarations: [
    AdminWelcomeComponent,
    AdminNewCourseComponent,
    AdminNewChapterComponent,
    AdminNewModuleComponent,
    adminComponent,
    Quizcomponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    UserModule,
    ReactiveFormsModule,
    WelcomeCourseModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [CourseService],
  exports: [
    AdminWelcomeComponent,
    AdminNewCourseComponent,
    AdminNewChapterComponent,
    AdminNewModuleComponent,
    adminComponent
  ]
})
export class adminModule {

}