package com.maghrebvoyage.tripadvisorclone.dto;

import java.time.LocalDateTime;

public class QuestionDto {
    private Long id;
    private String title;
    private String content;
    private UserDto author;
    private String category;
    private Integer answersCount;
    private Integer likes;
    private Boolean isWorldCupRelated;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Constructeurs
    public QuestionDto() {
    }

    public QuestionDto(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public UserDto getAuthor() {
        return author;
    }

    public void setAuthor(UserDto author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getAnswersCount() {
        return answersCount;
    }

    public void setAnswersCount(Integer answersCount) {
        this.answersCount = answersCount;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Boolean getIsWorldCupRelated() {
        return isWorldCupRelated;
    }

    public void setIsWorldCupRelated(Boolean isWorldCupRelated) {
        this.isWorldCupRelated = isWorldCupRelated;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}

