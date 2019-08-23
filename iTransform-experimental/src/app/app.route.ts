import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './user/login/login.component';
import { AdminWelcomeComponent } from './admin/admin-welcome/admin-welcome.component';
import { AdminNewCourseComponent } from './admin/admin-newcourse/admin-newcourse.component';
import { AdminNewChapterComponent } from './admin/admin-newChapter/admin-newChapter.component';
import { AdminNewModuleComponent } from './admin/admin-newModule/admin-newModule.component';
import { Quizcomponent } from './admin/admin-newQuiz/admin-newquiz.component';

export const appRoute: Routes = [
  
    {path : 'adminwelcome' , component:AdminWelcomeComponent},
    {path: '', component: WelcomeComponent},
    {path: 'login', component: LoginComponent},
    { path: 'addcourse', component: AdminNewCourseComponent },
    { path: 'addchapter', component: AdminNewChapterComponent },
    { path: 'addmodule', component: AdminNewModuleComponent },
    { path : 'addquiz' , component:Quizcomponent}

];
