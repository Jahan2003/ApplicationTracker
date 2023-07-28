package com.ats.security.controller;

import com.ats.security.entity.JobDetails;
import com.ats.security.service.JobDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/jobDetails")	
@CrossOrigin(origins="*",allowedHeaders="*")
public class JobDetailsController {

    private final JobDetailsService jobDetailsService;

    @Autowired
    public JobDetailsController(JobDetailsService jobDetailsService) {
        this.jobDetailsService = jobDetailsService;
    }

    @GetMapping
    public List<JobDetails> getAllJobDetails() {
        return jobDetailsService.getAllJobDetails();
    }
    
    @GetMapping("/{id}")
    public JobDetails getJobDetailsById(@PathVariable int id) {
        return jobDetailsService.getJobDetailsById(id);
    }

    @PostMapping
    public JobDetails createJobDetails(@RequestBody JobDetails jobDetails) {
        return jobDetailsService.createJobDetails(jobDetails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobDetails> updateJobDetails(@PathVariable int id, @RequestBody JobDetails jobDetails) {
        return jobDetailsService.updateJobDetails(id, jobDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteJobDetails(@PathVariable int id) {
        jobDetailsService.deleteJobDetails(id);
    }
}
