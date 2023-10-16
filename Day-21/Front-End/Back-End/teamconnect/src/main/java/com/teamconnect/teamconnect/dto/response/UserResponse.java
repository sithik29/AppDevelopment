package com.teamconnect.teamconnect.dto.response;

import java.util.Set;

import com.teamconnect.teamconnect.model.Projects;
import com.teamconnect.teamconnect.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long uid;
    private String name;
    private String email;
    private Set<Projects> projects;
    private Boolean isEnabled;
    private Role role;
}
