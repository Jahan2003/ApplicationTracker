package com.ats.security.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ats.security.entity.HRuser;
import com.ats.security.repository.HRuserRepository;

@Service
public class HRuserService {
    private final HRuserRepository hruserRepository;

    public HRuserService(HRuserRepository hruserRepository) {
        this.hruserRepository = hruserRepository;
    }

    public List<HRuser> getAllHRusers() {
        return hruserRepository.findAll();
    }

    public HRuser getHRuserById(int id) {
        return hruserRepository.findById(id).orElse(null);
    }

    public HRuser createHRuser(HRuser hruser) {
        return hruserRepository.save(hruser);
    }

    public HRuser updateHRuser(int id, HRuser hruser) {
        HRuser existingHRuser = hruserRepository.findById(id).orElse(null);
        if (existingHRuser != null) {
            existingHRuser.setFirstName(hruser.getFirstName());
            existingHRuser.setLastName(hruser.getLastName());
            existingHRuser.setEmail(hruser.getEmail());
            existingHRuser.setContactNo(hruser.getContactNo());
            existingHRuser.setPassword(hruser.getPassword());
            return hruserRepository.save(existingHRuser);
        }
        return null;
    }

    public void deleteHRuser(int id) {
        hruserRepository.deleteById(id);
    }
}
