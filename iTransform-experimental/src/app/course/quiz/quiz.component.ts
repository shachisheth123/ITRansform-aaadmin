import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterQuiz, CourseChapter, Courses, ChapterModule } from '../course';
import { User } from 'src/app/user/user';

@Component({
    templateUrl: "./quiz.component.html",
    styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {

    progress = 0;

    user: User;
    course: Courses;
    chapters: CourseChapter[];
    modules: ChapterModule[];

    chapterQuiz: ChapterQuiz[];
    quiz: ChapterQuiz;

    array: Array<String> = [];
    value: string;
    length = 0;

    moduleCount = 0;
    quizCount = 0;
    count = 0;

    courseId: number;
    chapterId: number;
    quizId: number;

    correct: boolean = false;
    total = 0;

    reply:string;
    replyBool:boolean=false;

    constructor(private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        // this.courses = this.user.course;


        this.route.paramMap.subscribe((map) => {
            this.courseId = Number(map.get("coursesId"));
            this.chapterId = Number(map.get("chapterId"));
            this.quizId = Number(map.get("quizId"));


            for (let i = 0; i < this.user.course.length; i++) {
                if (this.user.course[i].courseId == this.courseId) {
                    if (this.user.course[i].moduleComplete.includes(this.chapterId + "" + this.quizId + "q")) {
                        this.correct = true;
                    }
                    else {
                        this.correct = false;
                    }
                }
            }


            this.courseService.getCourseById(this.courseId).subscribe((data) => {
                this.course = data;
                console.log(this.course)
                console.log(this.chapterId + "" + this.quizId)
                //this.course = this.courses[this.courseId];
                this.chapters = this.course.courseChapter;

                for (let i = 0; i < this.chapters.length; i++) {
                    this.modules = this.chapters[i].chapterModule;
                    this.chapterQuiz = this.chapters[i].chapterQuiz;
                    console.log(this.course)
                    console.log(this.chapters[i])
                    console.log(this.chapterQuiz)
                    for (let j = 0; j < this.modules.length; j++) {

                        if (this.length == 0) {
                            this.array.push(i + "" + j);
                        }
                    }

                    if (this.chapterQuiz != null) {
                        for (let k = 0; k < this.chapterQuiz.length; k++) {
                            if (this.length == 0) {
                                this.array.push(i + "" + k + "q");
                            }
                        }
                    }

                }
                this.length = this.array.length;
                console.log(this.array);
                console.log(this.course);
                this.quiz = this.chapters[this.chapterId].chapterQuiz[this.quizId];
                console.log(this.quiz);



                //**************** */for progress bar start************************************
                this.count = 0;
                this.moduleCount = 0;
                this.quizCount = 0;
                console.log(this.course);

                for (let i = 0; i < this.course.courseChapter.length; i++) {
                    for (let j = 0; j < this.course.courseChapter[i].chapterModule.length; j++) {
                        console.log(this.chapters[i].chapterModule[j])
                        this.moduleCount++;
                        console.log(this.moduleCount)
                    }

                    if (this.chapters[i].chapterQuiz != null) {
                        for (let k = 0; k < this.course.courseChapter[i].chapterQuiz.length; k++) {
                            console.log(this.chapters[i].chapterQuiz[k])
                            console.log(this.chapters[i].chapterQuiz[k].complete)
                            this.quizCount++
                            console.log(this.quizCount)

                        }
                    }
                }
                for (let i = 0; i < this.user.course.length; i++) {
                    if (this.user.course[i].courseId == this.courseId) {
                        if(this.user.course[i].moduleComplete.includes("0")){
                            this.count = 0;
                        }else{
                            this.count = this.user.course[i].moduleComplete.length;
                        }
                    }
                }
                this.total = this.moduleCount + this.quizCount;
                console.log(this.moduleCount + this.quizCount);
                this.progress = Number((this.count / (this.moduleCount + this.quizCount)) * 100);
                console.log(this.count);
                //****************progress bar end********************************* */     
            });
        });
    }


    option: string;

    onSubmit() {
        for (let i = 0; i < this.user.course.length; i++) {
            if (this.user.course[i].courseId == this.courseId) {
                if (this.user.course[i].moduleComplete.includes(this.chapterId + "" + this.quizId + "q")) {
                    alert("already completed")
                } else {
                    if (this.quiz.answer == this.option) {
                        this.user.course[i].moduleComplete.push(this.chapterId + "" + this.quizId + "q");
                        if (this.user.course[i].moduleComplete.includes("0")) {
                            this.user.course[i].moduleComplete.shift();
                        }

                        this.courseService.updateUserCourse(this.user).subscribe((data) => {
                            this.user = data;
                            sessionStorage.setItem("user", JSON.stringify(this.user));

                            if (this.user.course[i].moduleComplete.includes(this.chapterId + "" + this.quizId + "q")) {
                                this.correct = true;
                            }
                            this.next();
                        })
                    } else {
                        alert("this answer is not correct")
                        if (this.user.course[i].moduleComplete.includes(this.chapterId + "" + this.quizId + "q")) {
                            this.correct = true;
                        } else {
                            this.correct = false;
                        }
                    }
                }
            }
        }
    }






    next() {

        ///**************** */for progress bar start************************************
        this.count = 0;
        this.moduleCount = 0;
        this.quizCount = 0;
        console.log(this.course);

        for (let i = 0; i < this.course.courseChapter.length; i++) {
            for (let j = 0; j < this.course.courseChapter[i].chapterModule.length; j++) {
                console.log(this.chapters[i].chapterModule[j])
                this.moduleCount++;
                console.log(this.moduleCount)
            }

            if (this.chapters[i].chapterQuiz != null) {
                for (let k = 0; k < this.course.courseChapter[i].chapterQuiz.length; k++) {
                    console.log(this.chapters[i].chapterQuiz[k])
                    console.log(this.chapters[i].chapterQuiz[k].complete)
                    this.quizCount++
                    console.log(this.quizCount)

                }
            }
        }
        for (let i = 0; i < this.user.course.length; i++) {
            if (this.user.course[i].courseId == this.courseId) {
                if(this.user.course[i].moduleComplete.includes("0")){
                    this.count = 0;
                }else{
                    this.count = this.user.course[i].moduleComplete.length;
                }
            }
        }
        this.total = this.moduleCount + this.quizCount;
        console.log(this.moduleCount + this.quizCount);
        this.progress = Number((this.count / (this.moduleCount + this.quizCount)) * 100);
        console.log(this.count);
        //****************progress bar end********************************* */



        let value = this.chapterId + "" + this.quizId + "q";
        for (let i = 0; i < this.array.length; i++) {
            if (value == this.array[i] && i != this.array.length - 1) {
                let got = this.array[i + 1];
                console.log(got)
                if (this.array[i + 1].length == 2) {
                    this.router.navigate(["chapters/" + this.courseId + "/modules/" + this.courseId + "/" + Number(got.charAt(0)) + "/" + Number(got.charAt(1))]);
                } else {
                    this.router.navigate(["chapters/" + this.courseId + "/quiz/" + this.courseId + "/" + Number(got.charAt(0)) + "/" + Number(got.charAt(1))]);
                }
            }
        }
    }

    previous() {

        let value = this.chapterId + "" + this.quizId + "q";
        for (let i = this.array.length - 1; i >= 0; i--) {
            if (value == this.array[i] && i != 0) {
                let got = this.array[i - 1];
                console.log(got);
                if (this.array[i - 1].length == 2) {
                    this.router.navigate(["chapters/" + this.courseId + "/modules/" + this.courseId + "/" + Number(got.charAt(0)) + "/" + Number(got.charAt(1))]);
                } else {
                    this.router.navigate(["chapters/" + this.courseId + "/quiz/" + this.courseId + "/" + Number(got.charAt(0)) + "/" + Number(got.charAt(1))]);
                }
            }
        }
    }
}