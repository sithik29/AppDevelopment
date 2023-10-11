package com.teamconnect.teamconnect.service;

import java.util.*;

import com.teamconnect.teamconnect.dto.request.CreateProjectRequest;
import com.teamconnect.teamconnect.dto.request.ProjectRequest;
import com.teamconnect.teamconnect.dto.response.ProjectResponse;

public interface ProjectService {
    
    public List<ProjectResponse> getAllProject();

    public ProjectResponse getProjectById(long pid); 

    public boolean createProject(CreateProjectRequest createProjectRequest,String name);

    public boolean updateProject(long pid,ProjectRequest projectRequest);

    public boolean deleteProject(long pid);

}
