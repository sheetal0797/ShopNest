package com.shopnest.request;

public class RatingRequest {

	private Long productId;
	
	private double rating;
	
	public RatingRequest() {
		// TODO Auto-generated constructor stub
	}
	
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	

	
}
