package com.maghrebvoyage.tripadvisorclone.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ItineraryDto {
    private Long id;
    private String title;
    private String description;
    private Integer duration;
    private String country;
    private String image;
    private Boolean worldCupSpecial;
    private List<ItineraryDayDto> days;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Constructeurs
    public ItineraryDto() {
    }

    public ItineraryDto(Long id, String title, Integer duration) {
        this.id = id;
        this.title = title;
        this.duration = duration;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Boolean getWorldCupSpecial() {
        return worldCupSpecial;
    }

    public void setWorldCupSpecial(Boolean worldCupSpecial) {
        this.worldCupSpecial = worldCupSpecial;
    }

    public List<ItineraryDayDto> getDays() {
        return days;
    }

    public void setDays(List<ItineraryDayDto> days) {
        this.days = days;
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

