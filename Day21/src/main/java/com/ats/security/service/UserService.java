package com.ats.security.service;

import com.ats.security.dto.request.UserRequest;
import com.ats.security.entity.JobDetails;
import com.ats.security.entity.User;
import com.ats.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(int id, User updatedUser) {
    	User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setFirstName(updatedUser.getFirstName());
            existingUser.setLastName(updatedUser.getLastName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setContactNumber(updatedUser.getContactNumber());
            existingUser.setDegree(updatedUser.getDegree());
            existingUser.setSpecializtion(updatedUser.getSpecializtion());
            existingUser.setAddress(updatedUser.getAddress());
            existingUser.setCollegeName(updatedUser.getCollegeName());
            existingUser.setPassingYear(updatedUser.getPassingYear());
            existingUser.setCgpa(updatedUser.getCgpa());
            existingUser.setExp(updatedUser.getExp());
            existingUser.setImg_link(updatedUser.getImg_link());
            existingUser.setJobsApplied(updatedUser.getJobsApplied());
            existingUser.setJobsOffered(updatedUser.getJobsOffered());
            existingUser.setInterview(updatedUser.getInterview());
            return userRepository.save(existingUser);
        }
        return null;
    }
    public List<JobDetails> updateJob(int id, List<JobDetails> job) {
    	User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
        	existingUser.setAppliedJobs(job);
        }
        return job;
        }
    
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

	public Optional<User> getUserByEmail(String email) {
		return userRepository.findByEmail(email);
		
	}

	
}

