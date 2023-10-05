package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.*;
import com.example.demo.repository.*;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepo;

    public List<Student> getAllStudent() {
        return studentRepo.findAll();
    }

    public void addStudent(Student student) {
        studentRepo.save(student);
    }

    public void deleteStudentById(Long id) {
        studentRepo.deleteById(id);
    }

    public Student getStudentById(Long id) { // Corrected method name
        return studentRepo.findById(id).orElse(null);
    }
}
