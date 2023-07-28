package com.ats.security.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="hruser")
public class HRuser {
  @Id
  @GeneratedValue
  private int id;
  private  String firstName;
  private String lastName;
  private String email;
  private String contactNo;
  private String password;
}
