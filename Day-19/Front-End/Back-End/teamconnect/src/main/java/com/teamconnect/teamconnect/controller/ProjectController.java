package com.teamconnect.teamconnect.controller;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teamconnect.teamconnect.constant.Api;
import com.teamconnect.teamconnect.dto.request.CreateProjectRequest;
import com.teamconnect.teamconnect.dto.request.ProjectRequest;
import com.teamconnect.teamconnect.dto.response.ProjectResponse;
import com.teamconnect.teamconnect.service.ProjectService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.PROJECT)
@RequiredArgsConstructor
@Tag(name = "Project")
public class ProjectController {

    private final ProjectService projectService;
    
    @PostMapping("/createProject")
    public ResponseEntity<Boolean> createProject(@RequestBody CreateProjectRequest createProjectRequest,@RequestParam(name = "name")String name ){
        boolean response = projectService.createProject(createProjectRequest,name);
        return ResponseEntity.ok().body(response) ;
    }

    @PutMapping("/updateProject/{pid}")
    public ResponseEntity<Boolean> updateProject(@RequestBody ProjectRequest projectRequest,@PathVariable("pid")Long pid){
        
        return  ResponseEntity.ok(projectService.updateProject(pid, projectRequest));
    }

    @GetMapping("/getProjectById/{pid}")
    public ResponseEntity<ProjectResponse> getProjectById(@PathVariable("pid")Long pid){
        ProjectResponse projectResponse = projectService.getProjectById(pid);
        return projectResponse != null ? ResponseEntity.ok(projectResponse) : ResponseEntity.notFound().build();
    }

    @GetMapping("/getAllProject")
    public ResponseEntity<List<ProjectResponse>> getAllProject(){
        List<ProjectResponse> projectResponse = projectService.getAllProject();
        return projectResponse != null ? ResponseEntity.ok(projectResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deleteProject/{pid}")
    public ResponseEntity<Boolean> deleteProject(@PathVariable(name = "pid")Long pid){
        return ResponseEntity.ok(projectService.deleteProject(pid));
    }
    

}
