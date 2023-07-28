package com.ats.security.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ats.security.entity.Interview;
import com.ats.security.repository.InterviewRepository;

@Service
public class InterviewService {
    private final InterviewRepository interviewRepository;

    public InterviewService(InterviewRepository interviewRepository) {
        this.interviewRepository = interviewRepository;
    }

    public List<Interview> getAllInterviews() {
        return interviewRepository.findAll();
    }

    public Interview getInterviewById(int id) {
        return interviewRepository.findById(id).orElse(null);
    }

    public Interview createInterview(Interview interview) {
        return interviewRepository.save(interview);
    }

    public Interview updateInterview(int id, Interview interview) {
        Interview existingInterview = interviewRepository.findById(id).orElse(null);
        if (existingInterview != null) {
            existingInterview.setRole(interview.getRole());
            existingInterview.setCompany(interview.getCompany());
            existingInterview.setLink(interview.getLink());
            existingInterview.setMode(interview.getMode());
            existingInterview.setDate(interview.getDate());
            existingInterview.setTime(interview.getTime());
            existingInterview.setInterviewer(interview.getInterviewer());
            return interviewRepository.save(existingInterview);
        }
        return null;
    }

    public void deleteInterview(int id) {
        interviewRepository.deleteById(id);
    }
}
