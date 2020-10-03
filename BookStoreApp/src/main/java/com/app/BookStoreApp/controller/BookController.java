package com.app.BookStoreApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.BookStoreApp.entity.Book;
import com.app.BookStoreApp.service.BookService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
//@RequestMapping(path ="/api")
public class BookController {

	private BookService bookService;
	
	
	@Autowired
	public BookController(BookService thebookService) {
		bookService = thebookService;
	}
	
	@GetMapping("/book")
	public List<Book> getBookData(){
		return bookService.findAll();
	}
 
	@GetMapping("/bookById/{bookId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Book getBookDataById(@PathVariable int bookId) {
		//return bookService.;
		return bookService.getBookDataById(bookId);
	}
	
}
