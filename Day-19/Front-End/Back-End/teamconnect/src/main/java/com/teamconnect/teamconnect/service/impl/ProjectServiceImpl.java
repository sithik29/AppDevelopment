package com.teamconnect.teamconnect.service.impl;

import org.springframework.stereotype.Service;

import com.teamconnect.teamconnect.dto.request.CreateProjectRequest;
import com.teamconnect.teamconnect.dto.request.ProjectRequest;
import com.teamconnect.teamconnect.dto.response.ProjectResponse;
import com.teamconnect.teamconnect.model.Projects;
import com.teamconnect.teamconnect.model.User;
import com.teamconnect.teamconnect.repository.ProjectRepository;
import com.teamconnect.teamconnect.repository.UserRepository;
import com.teamconnect.teamconnect.service.ProjectService;
import com.teamconnect.teamconnect.service.UserProjectsService;

import java.util.*;
import java.util.stream.Collectors;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService{
    
    private final ProjectRepository projectRepository;

    private final UserProjectsService userProjectsService;

    private final UserRepository userRepository;
    
    private Projects  projectVariable ;

    @Override
    public List<ProjectResponse> getAllProject(){
        List<Projects> projectList = projectRepository.findAll();

        
        return projectList.stream()
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public ProjectResponse getProjectById(long pid){
        Projects projects = projectRepository.findById(pid).get();
        // System.out.println(projects.getMembers());
        return mapUserToUserResponse(projects);

    }
    
    @Override
    public boolean createProject(CreateProjectRequest createProjectRequest,String name){
        Optional<Projects> isProjectExists = projectRepository.findByProjectname(createProjectRequest.getProjectname());
        if(!isProjectExists.isPresent()){
            projectVariable = Projects.builder()
                        .projectname(createProjectRequest.getProjectname())
                        .project(createProjectRequest.getProject())
                        .description(createProjectRequest.getDescription())
                        .build();
                        projectRepository.save(projectVariable);
            Projects project = projectRepository.findByProjectname(createProjectRequest.getProjectname()).get();
            User user = userRepository.findByName(name).get();
            boolean isMemberAdded = userProjectsService.addMembers(project.getPid(), user.getName());
            System.out.println(isMemberAdded);
            return true && isMemberAdded;
        }
        return false;
    }

    @Override
    public boolean updateProject(long pid,ProjectRequest projectRequest){

        Projects projects = projectRepository.findById(pid).get();
        projects.setDescription(projectRequest.getDescription());
        projects.setProject(projectRequest.getProject());
        
        projectRepository.save(projects);

        return true;
    }

   @Override
   public boolean deleteProject(long pid){
        Projects project = projectRepository.findByPid(pid);
        if(project!=null){
            boolean flag =userProjectsService.removeProject(pid);
            projectRepository.deleteById(pid);

            return true && flag;
        }
        return false;
            
    }
    

    private ProjectResponse mapUserToUserResponse(Projects projects) {

        
        return ProjectResponse.builder()
                .pid(projects.getPid())
                .projectname(projects.getProjectname())
                .project(projects.getProject())
                .description(projects.getDescription())
                .feedbacks(projects.getFeedbacks())
                .build();
    }

}
