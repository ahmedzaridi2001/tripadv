package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.RestaurantDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.Restaurant;
import com.maghrebvoyage.tripadvisorclone.repository.RestaurantRepository;
import com.maghrebvoyage.tripadvisorclone.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashSet;

@Service
@RequiredArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final ModelMapper modelMapper;

    @Override
    public Page<RestaurantDto> getAllRestaurants(String search, String city, String cuisine, Double minRating, String price, Boolean worldCupMenu, Pageable pageable) {
        Page<Restaurant> restaurants;
        
        if (search != null || city != null || cuisine != null || minRating != null || price != null || worldCupMenu != null) {
            restaurants = restaurantRepository.findByFilters(search, city, cuisine, minRating, price, worldCupMenu, pageable);
        } else {
            restaurants = restaurantRepository.findAll(pageable);
        }
        
        return restaurants.map(restaurant -> modelMapper.map(restaurant, RestaurantDto.class));
    }

    @Override
    public RestaurantDto getRestaurantById(Long id) {
        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Restaurant not found with id: " + id));
        return modelMapper.map(restaurant, RestaurantDto.class);
    }

    @Override
    @Transactional
    public RestaurantDto createRestaurant(RestaurantDto restaurantDto) {
        Restaurant restaurant = modelMapper.map(restaurantDto, Restaurant.class);
        
        // Set default values
        restaurant.setCreatedAt(LocalDateTime.now());
        restaurant.setUpdatedAt(LocalDateTime.now());
        
        if (restaurant.getFeatures() == null) {
            restaurant.setFeatures(new HashSet<>());
        }
        
        Restaurant savedRestaurant = restaurantRepository.save(restaurant);
        return modelMapper.map(savedRestaurant, RestaurantDto.class);
    }

    @Override
    @Transactional
    public RestaurantDto updateRestaurant(Long id, RestaurantDto restaurantDto) {
        Restaurant existingRestaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Restaurant not found with id: " + id));
        
        // Update fields
        if (restaurantDto.getName() != null) {
            existingRestaurant.setName(restaurantDto.getName());
        }
        
        if (restaurantDto.getDescription() != null) {
            existingRestaurant.setDescription(restaurantDto.getDescription());
        }
        
        if (restaurantDto.getLocation() != null) {
            existingRestaurant.setLocation(restaurantDto.getLocation());
        }
        
        if (restaurantDto.getAddress() != null) {
            existingRestaurant.setAddress(restaurantDto.getAddress());
        }
        
        if (restaurantDto.getCuisine() != null) {
            existingRestaurant.setCuisine(restaurantDto.getCuisine());
        }
        
        if (restaurantDto.getPrice() != null) {
            existingRestaurant.setPrice(restaurantDto.getPrice());
        }
        
        if (restaurantDto.getWorldCupMenu() != null) {
            existingRestaurant.setWorldCupMenu(restaurantDto.getWorldCupMenu());
        }
        
        existingRestaurant.setUpdatedAt(LocalDateTime.now());
        
        Restaurant updatedRestaurant = restaurantRepository.save(existingRestaurant);
        return modelMapper.map(updatedRestaurant, RestaurantDto.class);
    }

    @Override
    @Transactional
    public void deleteRestaurant(Long id) {
        if (!restaurantRepository.existsById(id)) {
            throw new ResourceNotFoundException("Restaurant not found with id: " + id);
        }
        restaurantRepository.deleteById(id);
    }
}

