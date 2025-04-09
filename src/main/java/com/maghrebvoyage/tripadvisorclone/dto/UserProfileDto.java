package com.maghrebvoyage.tripadvisorclone.dto;

public class UserProfileDto {
    private String firstName;
    private String lastName;
    private String bio;
    private String profileImage;

    // Constructeurs
    public UserProfileDto() {
    }

    public UserProfileDto(String firstName, String lastName, String bio, String profileImage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.profileImage = profileImage;
    }

    // Getters et Setters
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }
}

