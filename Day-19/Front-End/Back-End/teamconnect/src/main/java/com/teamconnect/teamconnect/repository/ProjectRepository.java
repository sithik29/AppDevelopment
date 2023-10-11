package com.teamconnect.teamconnect.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

import com.teamconnect.teamconnect.model.Projects;



public interface ProjectRepository extends JpaRepository<Projects,Long>{
    Optional<Projects> findByProjectname(String projectname);

    Projects  findByPid(Long pid);

    void deleteByPid(Long pid);

}
