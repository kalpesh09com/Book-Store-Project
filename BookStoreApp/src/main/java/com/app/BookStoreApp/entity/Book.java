package com.app.BookStoreApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="books")
public class Book {

	//define fields

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Books_ID")
	private int bookId;

	@Column(name = "Book_Name")
	private String bookName;

	@Column(name = "Author")
	private String Author;

	@Column(name = "Price")
	private Double Price;

	//default constructor
	public Book() {

	}
	
	//parameterized constructor
	public Book(int bookId, String bookName, String Author, Double Price) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.Author = Author;
		this.Price = Price;
	}

	//Getters and Setters

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getAuthor() {
		return Author;
	}

	public void setAuthor(String author) {
		Author = author;
	}

	public Double getPrice() {
		return Price;
	}

	public void setPrice(Double price) {
		Price = price;
	}

	//tostring method
	@Override
	public String toString() {
		return "Book [BookID=" + bookId + ", BookName=" + bookName + ", Author=" + Author + ", Price=" + Price
				+ "]";
	}

}
