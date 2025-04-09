package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.HotelDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface HotelService {
    Page<HotelDto> getAllHotels(String search, String city, Double minRating, Double minPrice, Double maxPrice, Boolean worldCupPromo, Pageable pageable);
    HotelDto getHotelById(Long id);
    HotelDto createHotel(HotelDto hotelDto);
    HotelDto updateHotel(Long id, HotelDto hotelDto);
    void deleteHotel(Long id);
}

