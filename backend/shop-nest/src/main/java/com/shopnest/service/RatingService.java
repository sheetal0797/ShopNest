package com.shopnest.service;

import java.util.List;

import com.shopnest.exception.ProductException;
import com.shopnest.model.Rating;
import com.shopnest.model.User;
import com.shopnest.request.RatingRequest;

public interface RatingService {

	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);
}
