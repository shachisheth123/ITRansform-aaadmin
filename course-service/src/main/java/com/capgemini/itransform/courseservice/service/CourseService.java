package com.capgemini.itransform.courseservice.service;


import java.util.List;

import com.capgemini.itransform.courseservice.entity.Course;

public interface CourseService {
	
	public Course addCourse(Course course);
	
	public List<Course> getAllCourses();
	
	public Course getCourseById(int courseId);
	
	public List<Course> getAllCourseName();
}
