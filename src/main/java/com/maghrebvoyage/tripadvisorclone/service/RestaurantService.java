package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.RestaurantDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RestaurantService {
    Page<RestaurantDto> getAllRestaurants(String search, String city, String cuisine, Double minRating, String price, Boolean worldCupMenu, Pageable pageable);
    RestaurantDto getRestaurantById(Long id);
    RestaurantDto createRestaurant(RestaurantDto restaurantDto);
    RestaurantDto updateRestaurant(Long id, RestaurantDto restaurantDto);
    void deleteRestaurant(Long id);
}

