package com.app.BookStoreApp.entity;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "order_details")
public class OrderDetails {
	
	@Id
	@Column(name = "Order_ID")
	private int orderId;
	
	@Column(name = "Customer_Name")
	private String userName;

	@Column(name = "Phone_No")
	private long phoneno;
	
	@Column(name = "Address")
	private String address;
	
	@Column(name = "Quantity")
	private  int quantity;
	
	@Column(name = "B_ID")
	private int bookId;
	
	@Column(name = "Order_Date")
	private String orderDate;
	
	@Column(name = "User_Id")
	private int userId;
	
	public OrderDetails(){
		Random rad = new Random();
		this.orderId = rad.nextInt(10000);
		Date d = new Date();
		DateFormat df = new SimpleDateFormat("dd/MM/yy");
		this.orderDate = df.format(d);
		}
	
	public OrderDetails(String userName, long phoneno, String address, int quantity,int bookId,int userId) {
		super();
		this.userName = userName;
		this.phoneno = phoneno;
		this.address = address;
		this.quantity = quantity;
		this.bookId = bookId;
		this.userId = userId;
		
		Random rad = new Random();
		this.orderId = rad.nextInt(100);
		Date d = new Date();
		DateFormat df = new SimpleDateFormat("dd/MM/yy");
		this.orderDate = df.format(d);
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId() {
		Random rad = new Random();
		this.orderId = rad.nextInt(100);
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public long getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate() {
		Date d = new Date();
		DateFormat df = new SimpleDateFormat("dd/MM/yy");
		this.orderDate = df.format(d);
	}
	
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	@Override
	public String toString() {
		return "OrderDetails [orderId=" + orderId + ", userName=" + userName + ", phoneNo=" + phoneno + ", address="
				+ address + ", quantity=" + quantity + ", bookId=" + bookId + ", oredrDate=" + orderDate  + ", userId="
				+ userId + "]";
	}
	
	
}
