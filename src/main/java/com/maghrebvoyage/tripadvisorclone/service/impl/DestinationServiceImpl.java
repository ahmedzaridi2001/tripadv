package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.DestinationDto;
import com.maghrebvoyage.tripadvisorclone.dto.PlaceDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.Destination;
import com.maghrebvoyage.tripadvisorclone.model.Place;
import com.maghrebvoyage.tripadvisorclone.repository.DestinationRepository;
import com.maghrebvoyage.tripadvisorclone.repository.PlaceRepository;
import com.maghrebvoyage.tripadvisorclone.service.DestinationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class DestinationServiceImpl implements DestinationService {

    private final DestinationRepository destinationRepository;
    private final PlaceRepository placeRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public DestinationServiceImpl(DestinationRepository destinationRepository, 
                                 PlaceRepository placeRepository,
                                 ModelMapper modelMapper) {
        this.destinationRepository = destinationRepository;
        this.placeRepository = placeRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Page<DestinationDto> getAllDestinations(String search, String country, Pageable pageable) {
        Page<Destination> destinations;
        
        if (search != null && !search.isEmpty() && country != null && !country.isEmpty()) {
            destinations = destinationRepository.findByNameContainingIgnoreCaseAndCountryIgnoreCase(search, country, pageable);
        } else if (search != null && !search.isEmpty()) {
            destinations = destinationRepository.findByNameContainingIgnoreCase(search, pageable);
        } else if (country != null && !country.isEmpty()) {
            destinations = destinationRepository.findByCountryIgnoreCase(country, pageable);
        } else {
            destinations = destinationRepository.findAll(pageable);
        }
        
        return destinations.map(destination -> modelMapper.map(destination, DestinationDto.class));
    }

    @Override
    public DestinationDto getDestinationById(Long id) {
        Destination destination = destinationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Destination not found with id: " + id));
        return modelMapper.map(destination, DestinationDto.class);
    }

    @Override
    public Page<PlaceDto> getPlacesByDestination(Long id, String category, Pageable pageable) {
        // Vérifier si la destination existe
        if (!destinationRepository.existsById(id)) {
            throw new ResourceNotFoundException("Destination not found with id: " + id);
        }
        
        Page<Place> places;
        if (category != null && !category.isEmpty()) {
            // Logique pour filtrer par catégorie (à implémenter)
            places = placeRepository.findByDestinationId(id, pageable);
        } else {
            places = placeRepository.findByDestinationId(id, pageable);
        }
        
        return places.map(place -> modelMapper.map(place, PlaceDto.class));
    }

    @Override
    public DestinationDto createDestination(DestinationDto destinationDto) {
        Destination destination = modelMapper.map(destinationDto, Destination.class);
        
        // Définir les dates de création et de mise à jour
        LocalDateTime now = LocalDateTime.now();
        destination.setCreatedAt(now);
        destination.setUpdatedAt(now);
        
        Destination savedDestination = destinationRepository.save(destination);
        return modelMapper.map(savedDestination, DestinationDto.class);
    }

    @Override
    public DestinationDto updateDestination(Long id, DestinationDto destinationDto) {
        Destination existingDestination = destinationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Destination not found with id: " + id));
        
        // Mettre à jour les propriétés
        existingDestination.setName(destinationDto.getName());
        existingDestination.setDescription(destinationDto.getDescription());
        existingDestination.setCountry(destinationDto.getCountry());
        existingDestination.setImageUrl(destinationDto.getImageUrl());
        existingDestination.setPlacesCount(destinationDto.getPlacesCount());
        existingDestination.setUpdatedAt(LocalDateTime.now());
        
        Destination updatedDestination = destinationRepository.save(existingDestination);
        return modelMapper.map(updatedDestination, DestinationDto.class);
    }

    @Override
    public void deleteDestination(Long id) {
        if (!destinationRepository.existsById(id)) {
            throw new ResourceNotFoundException("Destination not found with id: " + id);
        }
        destinationRepository.deleteById(id);
    }
}

