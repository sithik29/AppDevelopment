package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
public class Student {
	@Id	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long studentId;
	private String studentName;
	private String courseName;
	private String courseCategory;
	public Long getSudentId() {
		return studentId;
	}
	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setProductDescription(String courseName) {
		this.courseName = courseName;
	}
	public String getCourseCategory() {
		
		return courseCategory;
	}
	public void setProductCategory(String courseCategory) {
		this.courseCategory = courseCategory;
	}
	public Student(Long studentId, String studentName, String courseName, 
			String courseCategory) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.courseName = courseName;
		this.courseCategory = courseCategory;
	}
	public Student() {
	}
	
}
