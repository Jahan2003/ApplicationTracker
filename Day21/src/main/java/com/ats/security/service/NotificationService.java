package com.ats.security.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ats.security.entity.Notification;
import com.ats.security.repository.NotificationRepository;

@Service
public class NotificationService {
    private final NotificationRepository notificationRepository;

    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    public Notification getNotificationById(int id) {
        return notificationRepository.findById(id).orElse(null);
    }

    public Notification createNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    public Notification updateNotification(int id, Notification notification) {
        Notification existingNotification = notificationRepository.findById(id).orElse(null);
        if (existingNotification != null) {
            existingNotification.setTitle(notification.getTitle());
            existingNotification.setMessage(notification.getMessage());
            existingNotification.setDate(notification.getDate());
            return notificationRepository.save(existingNotification);
        }
        return null;
    }

    public void deleteNotification(int id) {
        notificationRepository.deleteById(id);
    }
}

