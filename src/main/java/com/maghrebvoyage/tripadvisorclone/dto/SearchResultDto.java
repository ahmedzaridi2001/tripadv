package com.maghrebvoyage.tripadvisorclone.dto;

public class SearchResultDto {
  private Long id;
  private String type;
  private String name;
  private String description;
  private String imageUrl;
  private String location;
  private Double rating;

  // Constructeurs
  public SearchResultDto() {
  }

  public SearchResultDto(Long id, String type, String name) {
      this.id = id;
      this.type = type;
      this.name = name;
  }

  // Getters et Setters
  public Long getId() {
      return id;
  }

  public void setId(Long id) {
      this.id = id;
  }

  public String getType() {
      return type;
  }

  public void setType(String type) {
      this.type = type;
  }

  public String getName() {
      return name;
  }

  public void setName(String name) {
      this.name = name;
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

  public String getLocation() {
      return location;
  }

  public void setLocation(String location) {
      this.location = location;
  }

  public Double getRating() {
      return rating;
  }

  public void setRating(Double rating) {
      this.rating = rating;
  }
}

