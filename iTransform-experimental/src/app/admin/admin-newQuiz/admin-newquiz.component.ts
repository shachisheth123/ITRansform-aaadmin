import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({

templateUrl:"./admin-newquiz.component.html",
styleUrls :['./admin-newquiz.component.css']

})
export class Quizcomponent{

    adminquizform : FormGroup;

    constructor(private fb:FormBuilder){}

    ngOnInIt(){

        this.adminquizform = this.fb.group(
            {
                question : [ ' ' , Validators.required],
                option1 : [' ' , Validators.required],
                option2 : [' ' , Validators.required],
                option3:['' ,Validators.required],
                option4 : ['' , Validators.required]
            }
        )
    }

    addQuiz(){
        
    }


    get question(){ return this.adminquizform.get("question"); }
    
    get option1(){ return this.adminquizform.get("option1"); }

    get option2(){ return this.adminquizform.get("option2"); }

    get option3(){ return this.adminquizform.get("option3"); }

    get option4(){ return this.adminquizform.get("option4"); }
 
}