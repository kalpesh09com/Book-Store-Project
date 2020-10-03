package com.app.BookStoreApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.app.BookStoreApp.dao.UserRepository;
import com.app.BookStoreApp.entity.User;

@Service
public class UserServiceImpl implements UserService{
	

	private UserRepository repo;

	public UserServiceImpl(UserRepository repo) {

		this.repo = repo;
	}

	@Override
	public void save(User theUser) {
		repo.save(theUser);
	}

	@Override
	public List<User> findAll() {

		return repo.findAll();
	}



	@Override
	public User getuserDataById(int userId) {
        
		Optional<User> result = repo.findById(userId);

		User theUser = null;
		if (result.isPresent()) {
			theUser = result.get();
		} else {
			// we did not find the user
			throw new RuntimeException("Did not find User = " + userId);
		}
		return theUser;
	}

	@Override
	public User findByPhoneNo(long phoneno) {
		// TODO Auto-generated method stub
		return repo.findByphoneno(phoneno);
	}

	@Override
	public User findByPhoneNoAndPassword(long phoneno, String password) {
		// TODO Auto-generated method stub
		return repo.findByphonenoAndPassword(phoneno , password);
	}

}
