package com.teamconnect.teamconnect.service;

import java.util.List;

import com.teamconnect.teamconnect.dto.request.UserRequest;
import com.teamconnect.teamconnect.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    boolean updateUser(UserRequest request, Long uid);

    boolean deleteUser(Long uid);

}
