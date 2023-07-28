package com.ats.security.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.ats.security.entity.FeedbackUser;

public interface FeedbackUserRepository extends JpaRepository<FeedbackUser, Long> {
    // You can add custom query methods here if needed
}