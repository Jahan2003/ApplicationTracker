package com.ats.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ats.security.entity.JobDetails;
import com.ats.security.repository.JobDetailsRepository;

@Service
public class JobDetailsService {

    private final JobDetailsRepository jobDetailsRepository;

    @Autowired
    public JobDetailsService(JobDetailsRepository jobDetailsRepository) {
        this.jobDetailsRepository = jobDetailsRepository;
    }

    public List<JobDetails> getAllJobDetails() {
        return jobDetailsRepository.findAll();
    }

    public JobDetails getJobDetailsById(int id) {
        return jobDetailsRepository.findById(id).orElse(null);
    }

    public JobDetails createJobDetails(JobDetails jobDetails) {
        return jobDetailsRepository.save(jobDetails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobDetails> updateJobDetails(@PathVariable int id, @RequestBody JobDetails updatedJobDetails) {
        JobDetails existingJobDetails = jobDetailsRepository.findById(id).orElse(null);
        if (existingJobDetails == null) {
            return ResponseEntity.notFound().build();
        }

        // Update the properties of the existing JobDetails entity
        existingJobDetails.setRole(updatedJobDetails.getRole());
        existingJobDetails.setCompany(updatedJobDetails.getCompany());
        existingJobDetails.setLocation(updatedJobDetails.getLocation());
        existingJobDetails.setAddress(updatedJobDetails.getAddress());
        existingJobDetails.setExp(updatedJobDetails.getExp());
        existingJobDetails.setSalary(updatedJobDetails.getSalary());	
        existingJobDetails.setResponsibilities(updatedJobDetails.getResponsibilities());
        existingJobDetails.setRequirements(updatedJobDetails.getRequirements());
        existingJobDetails.setClosed(updatedJobDetails.isClosed());
        existingJobDetails.setSaved(updatedJobDetails.isSaved());
        existingJobDetails.setApplied(updatedJobDetails.isApplied());
        
        // Save the updated JobDetails entity back to the database
        JobDetails savedJobDetails = jobDetailsRepository.save(existingJobDetails);
        return ResponseEntity.ok(savedJobDetails);
    }


    public void deleteJobDetails(int id) {
        jobDetailsRepository.deleteById(id);
    }
}

