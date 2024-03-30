package com.shopnest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopnest.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{

}
