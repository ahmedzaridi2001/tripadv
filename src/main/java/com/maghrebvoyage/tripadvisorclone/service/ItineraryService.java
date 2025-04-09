package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.ItineraryDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ItineraryService {
    Page<ItineraryDto> getAllItineraries(String search, String country, String duration, Boolean worldCupSpecial, Pageable pageable);
    ItineraryDto getItineraryById(Long id);
    ItineraryDto createItinerary(ItineraryDto itineraryDto, String username);
    ItineraryDto updateItinerary(Long id, ItineraryDto itineraryDto, String username);
    void deleteItinerary(Long id, String username);
}

