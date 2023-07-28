package com.ats.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ats.security.entity.Notification;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    // You can add custom query methods here if needed
}
