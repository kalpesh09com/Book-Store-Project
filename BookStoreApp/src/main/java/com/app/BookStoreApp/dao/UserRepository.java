package com.app.BookStoreApp.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.app.BookStoreApp.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	public User findByphoneno(long phoneno);
	
	public User findByphonenoAndPassword(long phoneno , String password);
	
	public User findByphonenoAndEmail(long phoneno, String email);
	
}
