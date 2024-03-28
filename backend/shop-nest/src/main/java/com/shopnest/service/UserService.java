package com.shopnest.service;

import com.shopnest.exception.UserException;
import com.shopnest.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByjwt(String jwt) throws UserException;

}
