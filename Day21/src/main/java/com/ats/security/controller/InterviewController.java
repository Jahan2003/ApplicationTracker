package com.ats.security.controller;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ats.security.entity.Interview;
import com.ats.security.service.InterviewService;

@RestController
@RequestMapping("api/v1/interviews")
@CrossOrigin(origins="*",allowedHeaders="*")
public class InterviewController {
    private final InterviewService interviewService;

    public InterviewController(InterviewService interviewService) {
        this.interviewService = interviewService;
    }

    @GetMapping
    public List<Interview> getAllInterviews() {
        return interviewService.getAllInterviews();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Interview> getInterviewById(@PathVariable int id) {
        Interview interview = interviewService.getInterviewById(id);
        return interview != null ? ResponseEntity.ok(interview) : ResponseEntity.notFound().build();
    }
    	
    @PostMapping
    public ResponseEntity<Interview> createInterview(@RequestBody Interview interview) {
        Interview createdInterview = interviewService.createInterview(interview);
        return ResponseEntity.created(URI.create("/api/interviews/" + createdInterview.getId())).body(createdInterview);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Interview> updateInterview(@PathVariable int id, @RequestBody Interview interview) {
        Interview updatedInterview = interviewService.updateInterview(id, interview);
        return updatedInterview != null ? ResponseEntity.ok(updatedInterview) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInterview(@PathVariable int id) {
        interviewService.deleteInterview(id);
        return ResponseEntity.noContent().build();
    }
}

