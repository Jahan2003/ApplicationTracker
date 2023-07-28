package com.ats.security.entity;

import java.util.Date;

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
@Table(name="interview")
public class Interview {
 @Id
 @GeneratedValue
 private int Id;
 private String role;
 private String Company;
 private String link;
 private String mode;
 private Date date;
 private String time;
 private String Interviewer;
}
