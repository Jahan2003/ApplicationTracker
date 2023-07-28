package com.ats.feedback_service.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ats.feedback_service.dto.FeedbackRequest;
import com.ats.feedback_service.dto.FeedbackResponse;
import com.ats.feedback_service.service.FeedbackService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/feed")
@RequiredArgsConstructor
@CrossOrigin("*")
public class FeedbackController {
	private final FeedbackService feedbackService;
	
	@PostMapping("/addFeedback")
	public ResponseEntity<String> addFeedback(@RequestBody FeedbackRequest feedbackRequest){
		boolean feedbackExists = feedbackService.addFeedback(feedbackRequest);
		if(feedbackExists == true)
			return ResponseEntity.status(HttpStatus.CREATED).body("Feedback added!");
		else
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Something went wrong!");
	}
	
	@GetMapping("/getFeedback")
	public ResponseEntity<List<FeedbackResponse>> getFeedback(){
		return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getFeedback());
	}
}
