package com.maghrebvoyage.tripadvisorclone.dto;

import java.util.List;

public class ItineraryDayDto {
    private Long id;
    private Integer dayNumber;
    private String title;
    private String description;
    private List<ActivityDto> activities;

    // Constructeurs
    public ItineraryDayDto() {
    }

    public ItineraryDayDto(Long id, Integer dayNumber, String title) {
        this.id = id;
        this.dayNumber = dayNumber;
        this.title = title;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getDayNumber() {
        return dayNumber;
    }

    public void setDayNumber(Integer dayNumber) {
        this.dayNumber = dayNumber;
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

    public List<ActivityDto> getActivities() {
        return activities;
    }

    public void setActivities(List<ActivityDto> activities) {
        this.activities = activities;
    }
}

