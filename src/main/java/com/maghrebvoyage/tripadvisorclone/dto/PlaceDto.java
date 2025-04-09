package com.maghrebvoyage.tripadvisorclone.dto;

import java.time.LocalDateTime;
import java.util.List;

public class PlaceDto {
  private Long id;
  private String name;
  private String description;
  private String address;
  private String location;
  private Double latitude;
  private Double longitude;
  private List<String> images;
  private Double rating;
  private Integer reviewsCount;
  private String price;
  private String phone;
  private String website;
  private String openingHours;
  private Boolean worldCupRelated;
  private Long categoryId;
  private Long destinationId;
  private CategoryDto category;
  private DestinationDto destination;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  // Constructeurs
  public PlaceDto() {
  }

  public PlaceDto(Long id, String name, String description) {
      this.id = id;
      this.name = name;
      this.description = description;
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

  public String getDescription() {
      return description;
  }

  public void setDescription(String description) {
      this.description = description;
  }

  public String getAddress() {
      return address;
  }

  public void setAddress(String address) {
      this.address = address;
  }

  public String getLocation() {
      return location;
  }

  public void setLocation(String location) {
      this.location = location;
  }

  public Double getLatitude() {
      return latitude;
  }

  public void setLatitude(Double latitude) {
      this.latitude = latitude;
  }

  public Double getLongitude() {
      return longitude;
  }

  public void setLongitude(Double longitude) {
      this.longitude = longitude;
  }

  public List<String> getImages() {
      return images;
  }

  public void setImages(List<String> images) {
      this.images = images;
  }

  public Double getRating() {
      return rating;
  }

  public void setRating(Double rating) {
      this.rating = rating;
  }

  public Integer getReviewsCount() {
      return reviewsCount;
  }

  public void setReviewsCount(Integer reviewsCount) {
      this.reviewsCount = reviewsCount;
  }

  public String getPrice() {
      return price;
  }

  public void setPrice(String price) {
      this.price = price;
  }

  public String getPhone() {
      return phone;
  }

  public void setPhone(String phone) {
      this.phone = phone;
  }

  public String getWebsite() {
      return website;
  }

  public void setWebsite(String website) {
      this.website = website;
  }

  public String getOpeningHours() {
      return openingHours;
  }

  public void setOpeningHours(String openingHours) {
      this.openingHours = openingHours;
  }

  public Boolean getWorldCupRelated() {
      return worldCupRelated;
  }

  public void setWorldCupRelated(Boolean worldCupRelated) {
      this.worldCupRelated = worldCupRelated;
  }

  public Long getCategoryId() {
      return categoryId;
  }

  public void setCategoryId(Long categoryId) {
      this.categoryId = categoryId;
  }

  public Long getDestinationId() {
      return destinationId;
  }

  public void setDestinationId(Long destinationId) {
      this.destinationId = destinationId;
  }

  public CategoryDto getCategory() {
      return category;
  }

  public void setCategory(CategoryDto category) {
      this.category = category;
  }

  public DestinationDto getDestination() {
      return destination;
  }

  public void setDestination(DestinationDto destination) {
      this.destination = destination;
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

