package com.app.BookStoreApp.service;

import java.util.List;

import com.app.BookStoreApp.entity.OrderDetails;

public interface OrderDetailService {
	
	public void saveOrderDetails(OrderDetails orderDetails);
	
	public List<OrderDetails> getOrderDetails();

}
