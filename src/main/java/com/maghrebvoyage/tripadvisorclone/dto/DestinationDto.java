package com.maghrebvoyage.tripadvisorclone.dto;

import java.time.LocalDateTime;

public class DestinationDto {
  private Long id;
  private String name;
  private String country;
  private String description;
  private String imageUrl;
  private Integer placesCount;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  // Constructeurs
  public DestinationDto() {
  }

  public DestinationDto(Long id, String name, String country) {
      this.id = id;
      this.name = name;
      this.country = country;
  }

  // Getters et Setters
  public Long getId() {
      return id;
  }

  public void setId(Long id) {
      this.id = id;
  }

  public String getName() {
      return name;
  }

  public void setName(String name) {
      this.name = name;
  }

  public String getCountry() {
      return country;
  }

  public void setCountry(String country) {
      this.country = country;
  }

  public String getDescription() {
      return description;
  }

  public void setDescription(String description) {
      this.description = description;
  }

  public String getImageUrl() {
      return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
      this.imageUrl = imageUrl;
  }

  public Integer getPlacesCount() {
      return placesCount;
  }

  public void setPlacesCount(Integer placesCount) {
      this.placesCount = placesCount;
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

