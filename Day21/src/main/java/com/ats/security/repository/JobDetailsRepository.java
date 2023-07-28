package com.ats.security.repository;

import com.ats.security.entity.JobDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobDetailsRepository extends JpaRepository<JobDetails, Integer> {
    // You can add custom query methods here if needed
}

