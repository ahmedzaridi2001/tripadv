package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.DestinationDto;
import com.maghrebvoyage.tripadvisorclone.dto.PlaceDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DestinationService {
    Page<DestinationDto> getAllDestinations(String search, String country, Pageable pageable);
    DestinationDto getDestinationById(Long id);
    Page<PlaceDto> getPlacesByDestination(Long id, String category, Pageable pageable);
    DestinationDto createDestination(DestinationDto destinationDto);
    DestinationDto updateDestination(Long id, DestinationDto destinationDto);
    void deleteDestination(Long id);
}

