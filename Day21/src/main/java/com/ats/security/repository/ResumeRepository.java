package com.ats.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ats.security.entity.Resume;

@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long> {
    // You can add custom query methods here if needed
}

