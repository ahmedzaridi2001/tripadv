package com.maghrebvoyage.tripadvisorclone.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ReviewDto {
  private Long id;
  private Integer rating;
  private String comment;
  private String content;
  private List<String> images;
  private Integer likes;
  private UserDto user;
  private Long placeId;
  private String placeName;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  // Constructeurs
  public ReviewDto() {
  }

  public ReviewDto(Long id, Integer rating, String comment) {
      this.id = id;
      this.rating = rating;
      this.comment = comment;
  }

  // Getters et Setters
  public Long getId() {
      return id;
  }

  public void setId(Long id) {
      this.id = id;
  }

  public Integer getRating() {
      return rating;
  }

  public void setRating(Integer rating) {
      this.rating = rating;
  }

  public String getComment() {
      return comment;
  }

  public void setComment(String comment) {
      this.comment = comment;
  }
  
  public String getContent() {
      return content;
  }

  public void setContent(String content) {
      this.content = content;
  }

  public List<String> getImages() {
      return images;
  }

  public void setImages(List<String> images) {
      this.images = images;
  }

  public Integer getLikes() {
      return likes;
  }

  public void setLikes(Integer likes) {
      this.likes = likes;
  }

  public UserDto getUser() {
      return user;
  }

  public void setUser(UserDto user) {
      this.user = user;
  }

  public Long getPlaceId() {
      return placeId;
  }

  public void setPlaceId(Long placeId) {
      this.placeId = placeId;
  }

  public String getPlaceName() {
      return placeName;
  }

  public void setPlaceName(String placeName) {
      this.placeName = placeName;
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

