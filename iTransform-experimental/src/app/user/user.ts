import { MIN_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';

export class User{
    userName:string;
    name:string;
    email:string;
    contactNumber:number;
    password:string;
    course:Array<Course>=[];
}

export class Course {
    courseId: number;
    moduleComplete: Array<string>=[];
}

export class Authenticate{
    userName:string;
    password:string;
}
