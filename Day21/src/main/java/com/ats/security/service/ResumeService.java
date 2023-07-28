package com.ats.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ats.security.entity.Resume;
import com.ats.security.repository.ResumeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    public Resume getResumeById(Long id) {
        Optional<Resume> optionalResume = resumeRepository.findById(id);
        return optionalResume.orElse(null);
    }
   
    public Resume createResume(Resume resume) {
        return resumeRepository.save(resume);
    }

    public Resume updateResume(Long id, Resume updatedResume) {
        Resume existingResume = getResumeById(id);
        if (existingResume != null) {
            existingResume.setJobId(updatedResume.getJobId());
            existingResume.setUserId(updatedResume.getUserId());
            existingResume.setResumeLink(updatedResume.getResumeLink());
            return resumeRepository.save(existingResume);
        }
        return null;
    }

    public void deleteResume(Long id) {
        resumeRepository.deleteById(id);
    }
}

