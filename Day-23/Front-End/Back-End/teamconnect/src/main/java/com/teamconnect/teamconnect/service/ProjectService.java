package com.teamconnect.teamconnect.service;

import java.util.*;

import org.springframework.web.multipart.MultipartFile;

import com.teamconnect.teamconnect.dto.request.CreateProjectRequest;
import com.teamconnect.teamconnect.dto.request.ProjectRequest;
import com.teamconnect.teamconnect.dto.response.ProjectResponse;

public interface ProjectService {
    
    public List<ProjectResponse> getAllProject();

    public ProjectResponse getProjectById(long pid); 

    public ProjectResponse createProject(CreateProjectRequest createProjectRequest,String name);

    public boolean updateProject(long pid,ProjectRequest projectRequest);

    public boolean deleteProject(long pid);

    public int getProjectCount();

    public boolean uploadProject(MultipartFile File,Long pid,Long tid);

    public byte[] getProjectFile(Long id);

}
