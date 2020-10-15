package com.app.BookStoreApp.service;

import java.util.List;

import com.app.BookStoreApp.entity.Book;



public interface BookService {
	
	public List<Book> findAll();
	
	public Book getBookDataById(int id);

}
