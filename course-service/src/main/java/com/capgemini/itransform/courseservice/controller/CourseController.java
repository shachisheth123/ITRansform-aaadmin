package com.capgemini.itransform.courseservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.itransform.courseservice.entity.Course;
import com.capgemini.itransform.courseservice.service.CourseService;

@RestController
@CrossOrigin("*")
public class CourseController {
	
	@Autowired
	CourseService service;
	
	@PostMapping("/course")
	public ResponseEntity<Course> addCourse(@RequestBody Course course){
		return new ResponseEntity<Course>(service.addCourse(course),HttpStatus.CREATED);
	}
	
	@GetMapping("/course")
	public ResponseEntity<List<Course>> getAllCourse(){
		return new ResponseEntity<List<Course>>(service.getAllCourses(),HttpStatus.OK);
	}
	
	@GetMapping("/courseName")
	public ResponseEntity<List<Course>> getAllCourseName(){
		return new ResponseEntity<List<Course>>(service.getAllCourseName(),HttpStatus.OK);
	}
	
	@GetMapping("/course/{courseId}")
	public ResponseEntity<Course> getCourseById(@PathVariable int courseId){
		return new ResponseEntity<Course>(service.getCourseById(courseId),HttpStatus.OK);
	}
}
