package com.app.BookStoreApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.BookStoreApp.entity.Book;

public interface BookRepository extends JpaRepository<Book,Integer>{

}
