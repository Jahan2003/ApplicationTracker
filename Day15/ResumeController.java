package com.ats.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ats.security.entity.Resume;
import com.ats.security.service.ResumeService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/apply")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @GetMapping
    public List<Resume> getAllResumes() {
        return resumeService.getAllResumes();
    }

    @GetMapping("/{id}")
    public Resume getResumeById(@PathVariable Long id) {
        return resumeService.getResumeById(id);
    }

    @PostMapping
    public Resume createResume(@RequestBody Resume resume) {
        return resumeService.createResume(resume);
    }

    @PutMapping("/{id}")
    public Resume updateResume(@PathVariable Long id, @RequestBody Resume updatedResume) {
        return resumeService.updateResume(id, updatedResume);
    }

    @DeleteMapping("/{id}")
    public void deleteResume(@PathVariable Long id) {
        resumeService.deleteResume(id);
    }
}
