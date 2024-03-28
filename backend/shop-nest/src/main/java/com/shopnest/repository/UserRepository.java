package com.shopnest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopnest.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
	
	public User findByEmail(String email);
}
