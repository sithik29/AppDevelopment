package com.teamconnect.teamconnect.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.teamconnect.teamconnect.model.User;


public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User>  findByName(String name);

    User findByUid(Long uid);

    void deleteByUid(Long uid);

    @Query(value = "select count(uid) from user",nativeQuery = true)
    int getUserCount();

}
