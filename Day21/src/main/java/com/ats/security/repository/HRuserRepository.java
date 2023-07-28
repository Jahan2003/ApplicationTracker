package com.ats.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ats.security.entity.HRuser;

@Repository
public interface HRuserRepository extends JpaRepository<HRuser, Integer> {
    // You can add custom query methods here if needed
}
