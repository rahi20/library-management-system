package com.datain.library_mgt_sys.service;

import com.datain.library_mgt_sys.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public List<User> getUsers(){
        return List.of(
                new User(
                        1L,
                        "Rahima",
                        "Largo",
                        "student"
                )
        );
    }

}