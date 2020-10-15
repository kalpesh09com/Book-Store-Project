package com.app.BookStoreApp.service;

import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.BookStoreApp.dao.BookRepository;
import com.app.BookStoreApp.entity.Book;

@Service
public class BookServiceImpl implements BookService{
	
	private BookRepository bookRepository;
	
	public BookServiceImpl(BookRepository thebookRepository) {
		// TODO Auto-generated constructor stub
		bookRepository = thebookRepository;
	}

	@Override
	@Transactional
	public List<Book> findAll() {	
		return bookRepository.findAll();
	}

	@Override
	public Book getBookDataById(int id) {
		// TODO Auto-generated method stub
		Optional<Book> result = bookRepository.findById(id);
		
		Book theBook = null;
		if (result.isPresent()) {
			theBook = result.get();
		} else {
			// we did not find the employee
			throw new RuntimeException("Did not find employee = " + id);
		}
		return theBook;
	}
}
