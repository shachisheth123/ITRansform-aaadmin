package com.capgemini.itransform.userservice.entity;

import java.util.List;

public class CourseList {

	private List<Course> course;

	public CourseList() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CourseList(List<Course> course) {
		super();
		this.course = course;
	}

	public List<Course> getCourse() {
		return course;
	}

	public void setCourse(List<Course> course) {
		this.course = course;
	}
	
	
}
