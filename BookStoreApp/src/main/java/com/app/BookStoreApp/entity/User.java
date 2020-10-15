package com.app.BookStoreApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Customer_ID ")
	private int userId ;
    
    @Column(name="Name")
	private String userName;
	
	@Column(name="Phone_No")
	private long phoneno;
	
	@Column(name=" Password")
	private String password;
	
	@Column(name="Email")
	private String email;
		
	
	@Column(name="Address_Line_1")
	private String AddressLine1;
	
	@Column(name="Address_Line_2")
	private String AddressLine2;
	
	@Column(name="City")
	private String City;
    
	@Column(name="Pincode")
	private int Pincode;
	
	//default constructor
		public User() {
			
		}
		
		//parameterized constructor
		public User(int userId, String userName, long phoneno, String password, String Email, String AddressLine1,
				String AddressLine2, String City, int Pincode) {
			super();
			this.userId = userId;
			this.userName = userName;
			this.phoneno = phoneno;
			this.password = password;
			this.email = Email;
			this.AddressLine1 = AddressLine1;
			this.AddressLine2 = AddressLine2;
			this.City = City;
			this.Pincode = Pincode;
		}

		//Getters and Setters

		public int getUserId() {
			return userId;
		}

		public void setUserId(int userId) {
			this.userId = userId;
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

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getAddressLine1() {
			return AddressLine1;
		}

		public void setAddressLine1(String addressLine1) {
			AddressLine1 = addressLine1;
		}

		public String getAddressLine2() {
			return AddressLine2;
		}

		public void setAddressLine2(String addressLine2) {
			AddressLine2 = addressLine2;
		}

		public String getCity() {
			return City;
		}

		public void setCity(String city) {
			City = city;
		}

		public int getPincode() {
			return Pincode;
		}

		public void setPincode(int pincode) {
			Pincode = pincode;
		}
		
		//tostring method
		@Override
		public String toString() {
			return "User [userId=" + userId + ", userName=" + userName + ", Phone_No=" + phoneno + ", Password=" + password
					+ ", Email=" + email + ", Address_Line_1=" + AddressLine1 + ", Address_Line_2=" + AddressLine2 + ", City="
					+ City + ", Pincode=" + Pincode + "]";
		}
}
