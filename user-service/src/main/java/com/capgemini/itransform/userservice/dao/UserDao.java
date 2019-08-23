package com.capgemini.itransform.userservice.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.itransform.userservice.entity.User;

@Repository
public interface UserDao extends MongoRepository<User, String>{

	public User findByuserName(String  userName);
}
