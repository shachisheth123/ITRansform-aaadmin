package com.capgemini.itransform.userservice.service;

import java.util.List;

import com.capgemini.itransform.userservice.entity.User;

public interface UserService {

	public User addNewUser(User user);
	
	public User getUserByUserName(String userName,String password);
	
	public User updateUser(User user);
	
	public List<User> getAllUsers();
}
