package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.PlaceDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface PlaceService {
    Page<PlaceDto> getAllPlaces(Pageable pageable);
    
    Page<PlaceDto> searchPlaces(String search, Long categoryId, String location, Double minRating, String priceLevel, Pageable pageable);
    
    Optional<PlaceDto> getPlaceById(Long id);
    
    PlaceDto createPlace(PlaceDto placeDto);
    
    PlaceDto updatePlace(Long id, PlaceDto placeDto);
    
    void deletePlace(Long id);
    
    List<PlaceDto> getPlacesByDestination(Long destinationId);
    
    List<PlaceDto> getPlacesByCategory(Long categoryId);
}

