package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;

@RestController

public class StudentController {

	@Autowired
	StudentService ser;
	
	@GetMapping("/get")
	public List<Student> getAllStudents()
	{
		return ser.getAllStudents();
	}
}
