package com.shopnest.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopnest.config.JwtTokenProvider;
import com.shopnest.exception.UserException;
import com.shopnest.model.User;
import com.shopnest.repository.UserRepository;
import com.shopnest.request.LoginRequest;
import com.shopnest.response.AuthResponse;
import com.shopnest.service.CustomUserServiceImplementation;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	private UserRepository userRepository;
	private JwtTokenProvider jwtTokenProvider;
	private PasswordEncoder passwordEncoder;
	private CustomUserServiceImplementation customUserService;
	


	public AuthController(UserRepository userRepository, JwtTokenProvider jwtTokenProvider,
			PasswordEncoder passwordEncoder, CustomUserServiceImplementation customUserService) {
		this.userRepository = userRepository;
		this.jwtTokenProvider = jwtTokenProvider;
		this.passwordEncoder = passwordEncoder;
		this.customUserService = customUserService;
	}

	@PostMapping("/signup")
	public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException
	{
		String email= user.getEmail();
		String password = user.getPassword();
		String firstName = user.getFirstName();
		String lastName = user.getLastName();
		
		User isEmailExist= userRepository.findByEmail(email);
		
		if(isEmailExist!=null)
		{
			throw new UserException("Email is already used with Another User");
		}
		
		User createdUser =new User();
		
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);
		
		User savedUser= userRepository.save(createdUser);
		
		
		Authentication authentication= new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token= jwtTokenProvider.generateToken(authentication);
		
		AuthResponse authResponse= new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Signup Success");
		
		return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
		
	}

	@PostMapping("/signin")
	public ResponseEntity<AuthResponse>loginUserHandler(@RequestBody LoginRequest loginRequest)
	{
		String userName = loginRequest.getEmail();
		String password = loginRequest .getPassword();
		
		Authentication authentication= authenticate(userName,password);
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token= jwtTokenProvider.generateToken(authentication);
		
		AuthResponse authResponse= new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Signin Success");
		
		return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
		
	}

	private Authentication authenticate(String userName, String password) {
		// TODO Auto-generated method stub
		UserDetails userDetails= customUserService.loadUserByUsername(userName);
		
		if(userDetails==null)
		{
			throw new BadCredentialsException("Invalid UserName...");
		}
		
		if(!passwordEncoder.matches(password, userDetails.getPassword()))
		{
			throw new BadCredentialsException("Invalid password...");
		}
		return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	}
}