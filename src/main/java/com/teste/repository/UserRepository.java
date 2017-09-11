package com.teste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teste.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long >{

}
