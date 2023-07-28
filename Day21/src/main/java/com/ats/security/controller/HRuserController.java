package com.ats.security.controller;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ats.security.entity.HRuser;
import com.ats.security.service.HRuserService;

@RestController
@RequestMapping("/api/hrusers")
public class HRuserController {
    private final HRuserService hruserService;

    public HRuserController(HRuserService hruserService) {
        this.hruserService = hruserService;
    }

    @GetMapping
    public List<HRuser> getAllHRusers() {
        return hruserService.getAllHRusers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HRuser> getHRuserById(@PathVariable int id) {
        HRuser hruser = hruserService.getHRuserById(id);
        return hruser != null ? ResponseEntity.ok(hruser) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<HRuser> createHRuser(@RequestBody HRuser hruser) {
        HRuser createdHRuser = hruserService.createHRuser(hruser);
        return ResponseEntity.created(URI.create("/api/hrusers/" + createdHRuser.getId())).body(createdHRuser);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HRuser> updateHRuser(@PathVariable int id, @RequestBody HRuser hruser) {
        HRuser updatedHRuser = hruserService.updateHRuser(id, hruser);
        return updatedHRuser != null ? ResponseEntity.ok(updatedHRuser) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHRuser(@PathVariable int id) {
        hruserService.deleteHRuser(id);
        return ResponseEntity.noContent().build();
    }
}

