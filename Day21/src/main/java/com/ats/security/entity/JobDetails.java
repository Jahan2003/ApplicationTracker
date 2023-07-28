package com.ats.security.entity;


import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
@Table(name="jobdetails")
public class JobDetails {
  @Id
  @GeneratedValue
  private int id;
  private String role;
  private String company;
  private String location;
  private String address;
  private int exp;	
  private String salary;
  @Column(length=5000)
  private String des;
  @Column(length=5000)
  private String responsibilities;
  @Column(length=5000)
  private String requirements;
  private boolean closed;	
  private boolean saved;
  private boolean applied;
  
  @ManyToMany
  @JoinTable(
    name = "users_applied", 
    joinColumns = @JoinColumn(name = "job_id"), 
    inverseJoinColumns = @JoinColumn(name = "user_id"))
  private List<User> user;
}
