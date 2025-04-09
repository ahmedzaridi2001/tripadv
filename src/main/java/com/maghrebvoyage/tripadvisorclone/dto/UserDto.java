package com.maghrebvoyage.tripadvisorclone.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private String location;
    private String bio;
    private String website;
    private String avatarUrl;
    private String nationality;
    private Integer age;
    private String role;
}

