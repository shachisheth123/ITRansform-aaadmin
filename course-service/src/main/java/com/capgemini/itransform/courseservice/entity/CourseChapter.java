package com.capgemini.itransform.courseservice.entity;

public class CourseChapter {
	private int chapterId;
	private String chapterName;
	private ChapterModule chapterModule[];
	private ChapterQuiz chapterQuiz[];
	
	public CourseChapter() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public CourseChapter(int chapterId, String chapterName, ChapterModule[] chapterModule, ChapterQuiz[] chapterQuiz) {
		super();
		this.chapterId = chapterId;
		this.chapterName = chapterName;
		this.chapterModule = chapterModule;
		this.chapterQuiz = chapterQuiz;
	}



	public int getChapterId() {
		return chapterId;
	}

	public void setChapterId(int chapterId) {
		this.chapterId = chapterId;
	}

	public String getChapterName() {
		return chapterName;
	}

	public void setChapterName(String chapterName) {
		this.chapterName = chapterName;
	}

	public ChapterModule[] getChapterModule() {
		return chapterModule;
	}

	public void setChapterModule(ChapterModule[] chapterModule) {
		this.chapterModule = chapterModule;
	}



	public ChapterQuiz[] getChapterQuiz() {
		return chapterQuiz;
	}



	public void setChapterQuiz(ChapterQuiz[] chapterQuiz) {
		this.chapterQuiz = chapterQuiz;
	}
	
	
	
}
