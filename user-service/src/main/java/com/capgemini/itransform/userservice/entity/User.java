package com.capgemini.itransform.userservice.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {
	@Id
	private String userName;
	private String name;
	private String email;
	private long contactNumber;
	private String password;
	private List<Course> course;
	
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}



	public User(String userName, String name, String email, long contactNumber, String password, List<Course> course) {
		super();
		this.userName = userName;
		this.name = name;
		this.email = email;
		this.contactNumber = contactNumber;
		this.password = password;
		this.course = course;
	}



	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public long getContactNumber() {
		return contactNumber;
	}



	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public List<Course> getCourse() {
		return course;
	}



	public void setCourse(List<Course> course) {
		this.course = course;
	}


}