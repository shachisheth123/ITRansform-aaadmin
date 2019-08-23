package com.capgemini.itransform.userservice.entity;

import java.util.List;

public class Course {
	private int courseId;
	private List<String> moduleComplete;
	
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Course(int courseId, List<String> moduleComplete) {
		super();
		this.courseId = courseId;
		this.moduleComplete = moduleComplete;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public List<String> getModuleComplete() {
		return moduleComplete;
	}

	public void setModuleComplete(List<String> moduleComplete) {
		this.moduleComplete = moduleComplete;
	}
	
}