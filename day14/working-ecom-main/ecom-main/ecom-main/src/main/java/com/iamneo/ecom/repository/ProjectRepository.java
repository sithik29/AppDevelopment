package com.iamneo.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.ecom.model.Projects;

public interface ProjectRepository extends JpaRepository<Projects,LONG>{
    
}
