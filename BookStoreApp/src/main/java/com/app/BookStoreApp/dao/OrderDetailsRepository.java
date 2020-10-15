package com.app.BookStoreApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.BookStoreApp.entity.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {

}
