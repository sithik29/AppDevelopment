package com.teamconnect.teamconnect.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teamconnect.teamconnect.dto.request.UserRequest;
import com.teamconnect.teamconnect.dto.response.UserResponse;
import com.teamconnect.teamconnect.model.User;
import com.teamconnect.teamconnect.model.enumerate.Role;
import com.teamconnect.teamconnect.repository.UserRepository;
import com.teamconnect.teamconnect.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUser(Long uid) {
        User user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    @Override
    public boolean updateUser(UserRequest request, Long uid) {
        User user = userRepository.findByUid(uid);

        if (user!=null){
           
            if(request.getName()!=null){
                Optional<User> isExist = userRepository.findByName(request.getName());

                    if(!isExist.isPresent()) {
                        user.setName(request.getName());
                    }
                    else{
                        return false;
                    }

            }

            if(request.getPassword()!=null){
                user.setPassword(passwordEncoder.encode(request.getPassword()));
            }


            userRepository.save(user);
            return true;
        }
        return false;
    }

    @Override
    public int getUserCount(){

        return userRepository.getUserCount();
    }

    @Override
    public boolean deleteUser(Long uid){
        User user  = userRepository.findById(uid).get();
        if(user!=null){
            userRepository.deleteById(uid);
            return true;
        }
        return false;
    }


    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .build();
    }

    

}
