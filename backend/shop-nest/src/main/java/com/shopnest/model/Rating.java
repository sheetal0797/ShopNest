package com.shopnest.model;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

		@Entity
		@Table(name = "rating")
		public class Rating {
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "user_id", nullable = false)
	    private User user;

	    @ManyToOne
	    @JoinColumn(name = "product_id", nullable = false)
	    private Product product;

	    @Column(name = "rating")
	    private double rating;
	    
	    private LocalDateTime createdAt;

}
