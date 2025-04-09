package com.maghrebvoyage.tripadvisorclone.dto;

import java.util.List;

public class HotelDto extends PlaceDto {
  private Integer stars;
  private List<String> amenities;
  private Integer rooms;
  private Double minPrice;
  private Double maxPrice;
  private Boolean worldCupPromo;
  private String location;

  // Constructeurs
  public HotelDto() {
  }

  public HotelDto(Long id, String name, String description, Integer stars) {
      super(id, name, description);
      this.stars = stars;
  }

  // Getters et Setters
  public Integer getStars() {
      return stars;
  }

  public void setStars(Integer stars) {
      this.stars = stars;
  }

  public List<String> getAmenities() {
      return amenities;
  }

  public void setAmenities(List<String> amenities) {
      this.amenities = amenities;
  }

  public Integer getRooms() {
      return rooms;
  }

  public void setRooms(Integer rooms) {
      this.rooms = rooms;
  }

  public Double getMinPrice() {
      return minPrice;
  }

  public void setMinPrice(Double minPrice) {
      this.minPrice = minPrice;
  }

  public Double getMaxPrice() {
      return maxPrice;
  }

  public void setMaxPrice(Double maxPrice) {
      this.maxPrice = maxPrice;
  }

  public Boolean getWorldCupPromo() {
      return worldCupPromo;
  }

  public void setWorldCupPromo(Boolean worldCupPromo) {
      this.worldCupPromo = worldCupPromo;
  }
  
  public String getLocation() {
      return location;
  }

  public void setLocation(String location) {
      this.location = location;
  }
}

