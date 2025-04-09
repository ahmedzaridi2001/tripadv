package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.PlaceDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.Category;
import com.maghrebvoyage.tripadvisorclone.model.Destination;
import com.maghrebvoyage.tripadvisorclone.model.Place;
import com.maghrebvoyage.tripadvisorclone.repository.CategoryRepository;
import com.maghrebvoyage.tripadvisorclone.repository.DestinationRepository;
import com.maghrebvoyage.tripadvisorclone.repository.PlaceRepository;
import com.maghrebvoyage.tripadvisorclone.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaceServiceImpl implements PlaceService {

    private final PlaceRepository placeRepository;
    private final CategoryRepository categoryRepository;
    private final DestinationRepository destinationRepository;
    private final ModelMapper modelMapper;

    @Override
    public Page<PlaceDto> getAllPlaces(Pageable pageable) {
        return placeRepository.findAll(pageable)
                .map(place -> modelMapper.map(place, PlaceDto.class));
    }

    @Override
    public Page<PlaceDto> searchPlaces(String search, Long categoryId, String location, Double minRating, String priceLevel, Pageable pageable) {
        // Implémentation simplifiée - à adapter selon vos besoins
        return placeRepository.findAll(pageable)
                .map(place -> modelMapper.map(place, PlaceDto.class));
    }

    @Override
    public Optional<PlaceDto> getPlaceById(Long id) {
        return placeRepository.findById(id)
                .map(place -> modelMapper.map(place, PlaceDto.class));
    }

    @Override
    @Transactional
    public PlaceDto createPlace(PlaceDto placeDto) {
        Place place = modelMapper.map(placeDto, Place.class);
        
        // Set category if provided
        if (placeDto.getCategoryId() != null) {
            Category category = categoryRepository.findById(placeDto.getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + placeDto.getCategoryId()));
            place.setCategory(category);
        }
        
        // Set destination if provided
        if (placeDto.getDestinationId() != null) {
            Destination destination = destinationRepository.findById(placeDto.getDestinationId())
                    .orElseThrow(() -> new ResourceNotFoundException("Destination not found with id: " + placeDto.getDestinationId()));
            place.setDestination(destination);
        }
        
        // Set default values
        place.setCreatedAt(LocalDateTime.now());
        place.setUpdatedAt(LocalDateTime.now());
        
        if (place.getImages() == null) {
            place.setImages(new ArrayList<>());
        }
        
        Place savedPlace = placeRepository.save(place);
        return modelMapper.map(savedPlace, PlaceDto.class);
    }

    @Override
    @Transactional
    public PlaceDto updatePlace(Long id, PlaceDto placeDto) {
        Place existingPlace = placeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Place not found with id: " + id));
        
        // Update fields
        if (placeDto.getName() != null) {
            existingPlace.setName(placeDto.getName());
        }
        
        if (placeDto.getDescription() != null) {
            existingPlace.setDescription(placeDto.getDescription());
        }
        
        if (placeDto.getLocation() != null) {
            existingPlace.setLocation(placeDto.getLocation());
        }
        
        if (placeDto.getAddress() != null) {
            existingPlace.setAddress(placeDto.getAddress());
        }
        
        if (placeDto.getLatitude() != null) {
            existingPlace.setLatitude(placeDto.getLatitude());
        }
        
        if (placeDto.getLongitude() != null) {
            existingPlace.setLongitude(placeDto.getLongitude());
        }
        
        if (placeDto.getPhone() != null) {
            existingPlace.setPhone(placeDto.getPhone());
        }
        
        if (placeDto.getWebsite() != null) {
            existingPlace.setWebsite(placeDto.getWebsite());
        }
        
        if (placeDto.getOpeningHours() != null) {
            existingPlace.setOpeningHours(placeDto.getOpeningHours());
        }
        
        if (placeDto.getPrice() != null) {
            existingPlace.setPrice(placeDto.getPrice());
        }
        
        if (placeDto.getWorldCupRelated() != null) {
            existingPlace.setWorldCupRelated(placeDto.getWorldCupRelated());
        }
        
        // Update category if provided
        if (placeDto.getCategoryId() != null) {
            Category category = categoryRepository.findById(placeDto.getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + placeDto.getCategoryId()));
            existingPlace.setCategory(category);
        }
        
        // Update destination if provided
        if (placeDto.getDestinationId() != null) {
            Destination destination = destinationRepository.findById(placeDto.getDestinationId())
                    .orElseThrow(() -> new ResourceNotFoundException("Destination not found with id: " + placeDto.getDestinationId()));
            existingPlace.setDestination(destination);
        }
        
        existingPlace.setUpdatedAt(LocalDateTime.now());
        
        Place updatedPlace = placeRepository.save(existingPlace);
        return modelMapper.map(updatedPlace, PlaceDto.class);
    }

    @Override
    @Transactional
    public void deletePlace(Long id) {
        if (!placeRepository.existsById(id)) {
            throw new ResourceNotFoundException("Place not found with id: " + id);
        }
        placeRepository.deleteById(id);
    }

    @Override
    public List<PlaceDto> getPlacesByDestination(Long destinationId) {
        Pageable pageable = PageRequest.of(0, 1000); // Récupérer jusqu'à 1000 lieux
        return placeRepository.findByDestinationId(destinationId, pageable)
                .getContent()
                .stream()
                .map(place -> modelMapper.map(place, PlaceDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<PlaceDto> getPlacesByCategory(Long categoryId) {
        Pageable pageable = PageRequest.of(0, 1000); // Récupérer jusqu'à 1000 lieux
        return placeRepository.findByCategoryId(categoryId, pageable)
                .getContent()
                .stream()
                .map(place -> modelMapper.map(place, PlaceDto.class))
                .collect(Collectors.toList());
    }
}

