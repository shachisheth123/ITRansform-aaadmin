package com.capgemini.itransform.courseservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.itransform.courseservice.dao.CourseDao;
import com.capgemini.itransform.courseservice.entity.Course;

@Service
public class CourseServiceImpl implements CourseService{

	@Autowired
	CourseDao dao;
	
	@Override
	public Course addCourse(Course course) {
		return dao.save(course);
	}

	@Override
	public List<Course> getAllCourses() {
		return dao.findAll();
	}

	@Override
	public Course getCourseById(int courseId) {
		return dao.findById(courseId).get();
	}

	@Override
	public List<Course> getAllCourseName() {
		return dao.findAllCourseName();
	}

}
