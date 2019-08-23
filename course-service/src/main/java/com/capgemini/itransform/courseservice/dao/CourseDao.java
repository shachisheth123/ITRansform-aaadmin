package com.capgemini.itransform.courseservice.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.capgemini.itransform.courseservice.entity.Course;

@Repository
public interface CourseDao extends MongoRepository<Course, Integer> {

	 @Query(value="{}",fields="{'courseName':1}")
	 public List<Course> findAllCourseName();
}
