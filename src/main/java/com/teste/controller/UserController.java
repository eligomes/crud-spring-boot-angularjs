package com.teste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.model.User;
import com.teste.service.UserService;

@RestController
@RequestMapping(value = "/api/user", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping
	public List<User> listUsers() {
		return service.listUser();
	}

	@PostMapping
	public User create(@RequestBody User user) {
		return service.create(user);
	}

	@PutMapping("/{id}")
	public User update(@RequestBody User user, @PathVariable Long id) {
		user.setId(id);
		return service.update(user);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);;
	}
	
	@GetMapping("/{id}")
	public User findOndeUser(@PathVariable Long id) {
		return service.findOneUser(id);
	}
}