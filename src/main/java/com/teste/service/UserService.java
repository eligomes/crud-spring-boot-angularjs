package com.teste.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teste.model.User;
import com.teste.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository repository;
	
	public User create(User user) {
		return repository.save(user);
	}

	public List<User> listUser() {
		return repository.findAll();
	}
	
	public void delete(Long id){
		repository.delete(id);
	}
	
	public User findOneUser(Long id) {
		return repository.findOne(id);
	}
	
	public User update(User user){
		 return repository.saveAndFlush(user);
	}

}
