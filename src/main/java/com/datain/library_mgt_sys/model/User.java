package com.datain.library_mgt_sys.model;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@RequiredArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "user")
@Entity(name = "User")
public class User {

    @Id
    @NonNull
    @SequenceGenerator(
            name = "username_sequence",
            sequenceName = "username_sequence"
    )
    private Long username;

    @NonNull
    private String firstName;

    @NonNull
    private String lastName;

    @NonNull
    private String role;
}
