package com.ats.security.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ats.security.dto.request.FeedbackRequest;
import com.ats.security.dto.request.UserRequest;
import com.ats.security.entity.FeedbackUser;
import com.ats.security.repository.FeedbackUserRepository;
import com.ats.security.repository.UserRepository;
import com.ats.security.vo.Feedback;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class Userfeedback {
	private final FeedbackUserRepository userRepository;
	
	private final RestTemplate restTemplate;

	public void addUserFeedback(UserRequest userRequest) {
		var user = FeedbackUser.builder().name(userRequest.getName()).email(userRequest.getEmail()).build();
		var feedback = FeedbackRequest.builder().email(userRequest.getEmail()).feedback(userRequest.getFeedback()).build();
		userRepository.save(user);	
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<FeedbackRequest> requestEntity = new HttpEntity<>(feedback, headers);
		restTemplate.postForObject("http://FEEDBACK-SERVICE/api/v1/feed/addFeedback", requestEntity, Feedback.class);
	}
}

