package com.ats.security.dto.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
	@Id
	@GeneratedValue
	private int Id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String contactNumber; 
	private String degree;
	private String specializtion;	
	private String collegeName;
	private String address; 
	private String passingYear;
	private float cgpa;
	private int exp;
}
