package com.ats.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ats.security.entity.Interview;

@Repository
public interface InterviewRepository extends JpaRepository<Interview, Integer> {
    // You can add custom query methods here if needed
}
