import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../course/course';
import { User, Authenticate } from './user';


@Injectable()
export class UserService{

    baseUrl = "http://localhost:8083/user";
    baseUrlForCourse = "http://localhost:8084/course"

    constructor(private http:HttpClient){}

    getAllCourses():Observable<Courses[]>{
        return this.http.get<Courses[]>(this.baseUrlForCourse);
        }
        
    addNewUser(user:User,courseId:number):Observable<User>{
        return this.http.post<User>(this.baseUrl+"/"+courseId,user);
    }

    
    getUserAuthentication(userName,password):Observable<User>{
        return this.http.get<User>(this.baseUrl+"/" + userName+ "/"+password);
    }

    getAllUser():Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl);
    }
}