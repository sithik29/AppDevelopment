package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepo;
@Service
public class StudentService {

	@Autowired
	StudentRepo res;
	public List<Student> getAllStudents()
	{
		return res.findAll();
	}
	
}
