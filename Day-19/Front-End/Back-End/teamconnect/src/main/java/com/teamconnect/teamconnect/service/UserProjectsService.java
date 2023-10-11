package com.teamconnect.teamconnect.service;

public interface UserProjectsService {
    boolean addMembers(long pid,String name);

    boolean addToProjects(long pid,String email);

    boolean removeMember(long uid);

    boolean removeProject(long pid);
}
