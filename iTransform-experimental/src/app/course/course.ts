export class Courses {
    courseName: string;
    courseId: number;
    courseImage: string;
    courseChapter: CourseChapter[];
}

export class CourseChapter {
    chapterName: string;
    chapterId: number;
    chapterModule: ChapterModule[];
    chapterQuiz: ChapterQuiz[];
}

export class ChapterModule {
    moduleName: string;
    moduleId: number;
    moduleDetails: ModuleDetails[];
    complete: boolean;
    module_no: number = 0;
}

export class ChapterQuiz {
    quizId: number;
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
    complete: boolean;
}

export class ModuleDetails {
    title: string;
    description: string;
    moduleImage: string;
    subModule: SubModule[];
    codesnippet: string;
    youtubelink: string;
}


export class SubModule {
    subtitle: string;
    subdescription: string;
}



