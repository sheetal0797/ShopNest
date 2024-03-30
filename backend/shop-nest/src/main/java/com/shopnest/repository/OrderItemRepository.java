package com.shopnest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopnest.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	
}
