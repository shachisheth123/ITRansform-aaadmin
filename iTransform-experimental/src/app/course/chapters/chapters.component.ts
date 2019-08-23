import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses, CourseChapter, ChapterModule, ChapterQuiz } from '../course';
import { User } from 'src/app/user/user';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
    templateUrl: './chapters.component.html',
    styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {


    courseForSessionStorage: Courses;

    progress = 0;
    count = 0;
    user: User;
    module: ChapterModule;
    courseId: number;
    chapterId: number;
    moduleId: number;
    video: string;
    array: Array<String> = [];
    value: string;
    length = 0;
    moduleCount = 0;
    quizCount = 0;
    total = 0;
    one = 1;

    chapterQuiz: ChapterQuiz[];
    constructor(private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router) { }

    course: Courses;
    chapters: CourseChapter[]
    modules: ChapterModule[];
    resume: any = "false";

    // courseId: number;
    ngOnInit(): void {
        debugger

        if (this.router.isActive("chapters/101", true)) {
            this.resume = true;
            localStorage.setItem("resume", "true");
        }
        else {
            this.resume = false;
            localStorage.setItem("resume", "false");
        }

        this.resume = localStorage.getItem("resume");

        this.progress_ls = Number(localStorage.getItem("progress"));
        this.progress = Number(localStorage.getItem("progress"));
        this.route.paramMap.subscribe((map) => {
            this.courseId = Number(map.get("courseId"));
            this.chapterId = Number(map.get("chapterId"));
            this.moduleId = Number(map.get("moduleId"));
            console.log(this.courseId);
            this.courseService.getCourseById(this.courseId).subscribe((data) => {
                this.course = data;

                console.log(this.chapterId + "" + this.moduleId);
                this.chapters = this.course.courseChapter;
                console.log(this.chapters);
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
                this.module = this.chapters[this.chapterId].chapterModule[this.moduleId];
                console.log(this.module);
                // console.log(this.module.moduleDetails.youtubelink);
                // this.video = this.module.moduleDetails.youtubelink;
                for (let m = 0; m < this.module.moduleDetails.length; m++) {
                    console.log(this.module.moduleDetails[m].youtubelink);
                    this.video = this.module.moduleDetails[m].youtubelink;
                }

                //**************** */for progress bar start************************************
                this.count = 0;
                this.moduleCount = 0;
                this.quizCount = 0;
                console.log(this.course);

                for (let i = 0; i < this.course.courseChapter.length; i++) {
                    for (let j = 0; j < this.course.courseChapter[i].chapterModule.length; j++) {
                        console.log(this.chapters[i].chapterModule[j])
                        this.moduleCount++;
                        this.course.courseChapter[i].chapterModule[j].module_no = this.moduleCount;
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
                console.log("here")
                console.log(this.course.courseChapter)
                for (let i = 0; i < this.user.course.length; i++) {
                    if (this.user.course[i].courseId == this.courseId) {
                        if (this.user.course[i].moduleComplete.includes("0")) {
                            this.count = 0;
                        } else {
                            this.count = this.user.course[i].moduleComplete.length;

                        }
                    }
                }
                this.total = this.moduleCount + this.quizCount;
                console.log(this.moduleCount + this.quizCount);
                this.progress = ((this.count / (this.moduleCount + this.quizCount)) * 100);
                console.log(this.count);
                //****************progress bar end********************************* */

            });

        })
    }
    progress_ls: any = "";

    next() {
        console.log(this.user)
        for (let a = 0; a < this.user.course.length; a++) {
            console.log(1)
            if (this.user.course[a].courseId = this.courseId) {
                console.log(this.user.course[a].moduleComplete.length)

                if (this.user.course[a].moduleComplete.includes(this.chapterId + "" + this.moduleId)) {


                } else {
                    this.user.course[a].moduleComplete.push(this.chapterId + "" + this.moduleId);
                    if (this.user.course[a].moduleComplete.includes("0")) {
                        this.user.course[a].moduleComplete.shift();
                    }
                }
            }
        }
        console.log(this.user)

        this.courseService.updateUserCourse(this.user).subscribe((data) => {
            this.user = data;
            sessionStorage.setItem('user', JSON.stringify(this.user));
        });


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
                if (this.user.course[i].moduleComplete.includes("0")) {
                    this.count = 0;
                } else {
                    this.count = this.user.course[i].moduleComplete.length;
                }
            }
        }
        this.total = this.moduleCount + this.quizCount;
        console.log(this.moduleCount + this.quizCount);
        this.progress = ((this.count / (this.moduleCount + this.quizCount)) * 100);
        console.log(this.count);
        console.log(this.progress + "here");





    }

    previous() {

        let value = this.chapterId + "" + this.moduleId;
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


    resumebtn() {

        debugger
        switch (localStorage.getItem("progress")) {

            case '20':
                this.router.navigateByUrl('/chapters/101/modules/101/0/0')

            case '40':
                this.router.navigateByUrl('/chapters/101/modules/101/1/0')

            case '60':
                this.router.navigateByUrl('/chapters/101/modules/101/1/0')

            case '80':
                this.router.navigateByUrl('/chapters/101/modules/101/1/1')

            case '100':
                this.router.navigateByUrl('/chapters/101/modules/101/1/2')
        }

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
                if (this.user.course[i].moduleComplete.includes("0")) {
                    this.count = 0;
                } else {
                    this.count = this.user.course[i].moduleComplete.length;
                }
            }
        }
        this.total = this.moduleCount + this.quizCount;
        console.log(this.moduleCount + this.quizCount);
        this.progress = ((this.count / (this.moduleCount + this.quizCount)) * 100);
        console.log(this.count);
        console.log(this.progress + "here");

    }
}