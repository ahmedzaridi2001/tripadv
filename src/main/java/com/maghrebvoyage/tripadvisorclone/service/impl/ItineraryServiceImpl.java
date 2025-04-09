package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.ItineraryDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.Itinerary;
import com.maghrebvoyage.tripadvisorclone.model.User;
import com.maghrebvoyage.tripadvisorclone.repository.ItineraryRepository;
import com.maghrebvoyage.tripadvisorclone.repository.UserRepository;
import com.maghrebvoyage.tripadvisorclone.service.ItineraryService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ItineraryServiceImpl implements ItineraryService {

  private final ItineraryRepository itineraryRepository;
  private final UserRepository userRepository;
  private final ModelMapper modelMapper;

  @Override
  public Page<ItineraryDto> getAllItineraries(String search, String country, String duration, Boolean worldCupSpecial, Pageable pageable) {
      Page<Itinerary> itineraries;
      
      if (search != null || country != null || duration != null || worldCupSpecial != null) {
          itineraries = itineraryRepository.findBySearchCriteria(search, country, duration, worldCupSpecial, pageable);
      } else {
          itineraries = itineraryRepository.findAll(pageable);
      }
      
      return itineraries.map(itinerary -> modelMapper.map(itinerary, ItineraryDto.class));
  }

  @Override
  public ItineraryDto getItineraryById(Long id) {
      Itinerary itinerary = itineraryRepository.findById(id)
              .orElseThrow(() -> new ResourceNotFoundException("Itinerary not found with id: " + id));
      return modelMapper.map(itinerary, ItineraryDto.class);
  }

  @Override
  @Transactional
  public ItineraryDto createItinerary(ItineraryDto itineraryDto, String username) {
      User creator = userRepository.findByEmail(username)
              .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
      
      Itinerary itinerary = modelMapper.map(itineraryDto, Itinerary.class);
      itinerary.setCreator(creator);
      
      Itinerary savedItinerary = itineraryRepository.save(itinerary);
      return modelMapper.map(savedItinerary, ItineraryDto.class);
  }

  @Override
  @Transactional
  public ItineraryDto updateItinerary(Long id, ItineraryDto itineraryDto, String username) {
      Itinerary existingItinerary = itineraryRepository.findById(id)
              .orElseThrow(() -> new ResourceNotFoundException("Itinerary not found with id: " + id));
      
      User user = userRepository.findByEmail(username)
              .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
      
      // Check if the user is the creator of the itinerary
      if (!existingItinerary.getCreator().getId().equals(user.getId())) {
          throw new IllegalStateException("You are not authorized to update this itinerary");
      }
      
      // Update fields
      existingItinerary.setTitle(itineraryDto.getTitle());
      existingItinerary.setDescription(itineraryDto.getDescription());
      existingItinerary.setImage(itineraryDto.getImage());
      existingItinerary.setDuration(itineraryDto.getDuration());
      existingItinerary.setWorldCupSpecial(itineraryDto.getWorldCupSpecial());
      
      // Update collections if they exist in the model
      if (existingItinerary.getCountries() != null && itineraryDto.getDays() != null) {
          // Handle collections based on your actual model structure
          // This is a simplified example
      }
      
      Itinerary updatedItinerary = itineraryRepository.save(existingItinerary);
      return modelMapper.map(updatedItinerary, ItineraryDto.class);
  }

  @Override
  @Transactional
  public void deleteItinerary(Long id, String username) {
      Itinerary itinerary = itineraryRepository.findById(id)
              .orElseThrow(() -> new ResourceNotFoundException("Itinerary not found with id: " + id));
      
      User user = userRepository.findByEmail(username)
              .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
      
      // Check if the user is the creator of the itinerary
      if (!itinerary.getCreator().getId().equals(user.getId())) {
          throw new IllegalStateException("You are not authorized to delete this itinerary");
      }
      
      itineraryRepository.delete(itinerary);
  }
}

