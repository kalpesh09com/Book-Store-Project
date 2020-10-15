package com.app.BookStoreApp.service;

import java.util.List;

import com.app.BookStoreApp.entity.User;

public interface UserService {
	
	public void save(User theUser);

	public List<User> findAll();

	public User getuserDataById(int userId);

	public User findByPhoneNo(long phoneno);
	
	public User findByPhoneNoAndPassword(long phoneno ,String password);
	
	public User findByPhoneNoAndEmail(long phoneno, String email);

}
