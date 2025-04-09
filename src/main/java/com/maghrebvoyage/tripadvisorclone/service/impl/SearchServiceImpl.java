package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.SearchResultDto;
import com.maghrebvoyage.tripadvisorclone.repository.DestinationRepository;
import com.maghrebvoyage.tripadvisorclone.repository.HotelRepository;
import com.maghrebvoyage.tripadvisorclone.repository.PlaceRepository;
import com.maghrebvoyage.tripadvisorclone.repository.RestaurantRepository;
import com.maghrebvoyage.tripadvisorclone.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService {

    private final PlaceRepository placeRepository;
    private final HotelRepository hotelRepository;
    private final RestaurantRepository restaurantRepository;
    private final DestinationRepository destinationRepository;
    private final ModelMapper modelMapper;

    @Override
    public Page<SearchResultDto> search(String query, String type, Pageable pageable) {
        List<SearchResultDto> results = new ArrayList<>();
        
        if (type == null || type.isEmpty() || type.equalsIgnoreCase("all")) {
            // Search in all entities
            results.addAll(searchPlaces(query, pageable));
            results.addAll(searchHotels(query, pageable));
            results.addAll(searchRestaurants(query, pageable));
            results.addAll(searchDestinations(query, pageable));
        } else if (type.equalsIgnoreCase("place")) {
            results.addAll(searchPlaces(query, pageable));
        } else if (type.equalsIgnoreCase("hotel")) {
            results.addAll(searchHotels(query, pageable));
        } else if (type.equalsIgnoreCase("restaurant")) {
            results.addAll(searchRestaurants(query, pageable));
        } else if (type.equalsIgnoreCase("destination")) {
            results.addAll(searchDestinations(query, pageable));
        }
        
        // Create a page from the results
        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), results.size());
        
        List<SearchResultDto> pageContent = start < end ? results.subList(start, end) : new ArrayList<>();
        
        return new PageImpl<>(pageContent, pageable, results.size());
    }
    
    private List<SearchResultDto> searchPlaces(String query, Pageable pageable) {
        return placeRepository.findByFilters(query, null, null, null, null, pageable)
                .getContent()
                .stream()
                .map(place -> {
                    SearchResultDto result = new SearchResultDto();
                    result.setId(place.getId());
                    result.setName(place.getName());
                    result.setDescription(place.getDescription());
                    result.setType("place");
                    result.setImageUrl(place.getImages() != null && !place.getImages().isEmpty() ? 
                            place.getImages().iterator().next() : null);
                    result.setLocation(place.getLocation());
                    result.setRating(place.getRating());
                    return result;
                })
                .collect(Collectors.toList());
    }
    
    private List<SearchResultDto> searchHotels(String query, Pageable pageable) {
        return hotelRepository.findByFilters(query, null, null, null, null, null, pageable)
                .getContent()
                .stream()
                .map(hotel -> {
                    SearchResultDto result = new SearchResultDto();
                    result.setId(hotel.getId());
                    result.setName(hotel.getName());
                    result.setDescription(hotel.getDescription());
                    result.setType("hotel");
                    result.setImageUrl(hotel.getImages() != null && !hotel.getImages().isEmpty() ? 
                            hotel.getImages().iterator().next() : null);
                    result.setLocation(hotel.getLocation());
                    result.setRating(hotel.getRating());
                    return result;
                })
                .collect(Collectors.toList());
    }
    
    private List<SearchResultDto> searchRestaurants(String query, Pageable pageable) {
        return restaurantRepository.findByFilters(query, null, null, null, null, null, pageable)
                .getContent()
                .stream()
                .map(restaurant -> {
                    SearchResultDto result = new SearchResultDto();
                    result.setId(restaurant.getId());
                    result.setName(restaurant.getName());
                    result.setDescription(restaurant.getDescription());
                    result.setType("restaurant");
                    result.setImageUrl(restaurant.getImages() != null && !restaurant.getImages().isEmpty() ? 
                            restaurant.getImages().iterator().next() : null);
                    result.setLocation(restaurant.getLocation());
                    result.setRating(restaurant.getRating());
                    return result;
                })
                .collect(Collectors.toList());
    }
    
    private List<SearchResultDto> searchDestinations(String query, Pageable pageable) {
        return destinationRepository.findByNameContainingIgnoreCase(query, pageable)
                .getContent()
                .stream()
                .map(destination -> {
                    SearchResultDto result = new SearchResultDto();
                    result.setId(destination.getId());
                    result.setName(destination.getName());
                    result.setDescription(destination.getDescription());
                    result.setType("destination");
                    result.setImageUrl(destination.getImageUrl());
                    result.setLocation(destination.getCountry());
                    return result;
                })
                .collect(Collectors.toList());
    }
}

