package com.shopnest.service;

import java.util.List;

import com.shopnest.exception.ProductException;
import com.shopnest.model.Review;
import com.shopnest.model.User;
import com.shopnest.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
