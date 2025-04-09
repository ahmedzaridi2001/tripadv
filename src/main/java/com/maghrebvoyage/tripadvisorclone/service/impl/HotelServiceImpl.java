package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.HotelDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.Hotel;
import com.maghrebvoyage.tripadvisorclone.repository.HotelRepository;
import com.maghrebvoyage.tripadvisorclone.service.HotelService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;

@Service
public class HotelServiceImpl implements HotelService {

    private final HotelRepository hotelRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public HotelServiceImpl(HotelRepository hotelRepository, ModelMapper modelMapper) {
        this.hotelRepository = hotelRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Page<HotelDto> getAllHotels(String search, String city, Double minRating, Double minPrice, Double maxPrice, Boolean worldCupPromo, Pageable pageable) {
        Page<Hotel> hotels;
        
        if (search != null || city != null || minRating != null || minPrice != null || maxPrice != null || worldCupPromo != null) {
            hotels = hotelRepository.findByFilters(search, city, minRating, minPrice, maxPrice, worldCupPromo, pageable);
        } else {
            hotels = hotelRepository.findAll(pageable);
        }
        
        return hotels.map(hotel -> modelMapper.map(hotel, HotelDto.class));
    }

    @Override
    public HotelDto getHotelById(Long id) {
        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Hotel not found with id: " + id));
        return modelMapper.map(hotel, HotelDto.class);
    }

    @Override
    public HotelDto createHotel(HotelDto hotelDto) {
        Hotel hotel = modelMapper.map(hotelDto, Hotel.class);
        
        // Set default values
        hotel.setCreatedAt(LocalDateTime.now());
        hotel.setUpdatedAt(LocalDateTime.now());
        
        if (hotel.getAmenities() == null) {
            hotel.setAmenities(new HashSet<>());
        }
        
        Hotel savedHotel = hotelRepository.save(hotel);
        return modelMapper.map(savedHotel, HotelDto.class);
    }

    @Override
    public HotelDto updateHotel(Long id, HotelDto hotelDto) {
        Hotel existingHotel = hotelRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Hotel not found with id: " + id));
        
        // Update fields
        if (hotelDto.getName() != null) {
            existingHotel.setName(hotelDto.getName());
        }
        
        if (hotelDto.getDescription() != null) {
            existingHotel.setDescription(hotelDto.getDescription());
        }
        
        if (hotelDto.getStars() != null) {
            existingHotel.setStars(hotelDto.getStars());
        }
        
        if (hotelDto.getAddress() != null) {
            existingHotel.setAddress(hotelDto.getAddress());
        }
        
        if (hotelDto.getMinPrice() != null) {
            existingHotel.setPricePerNight(hotelDto.getMinPrice());
        }
        
        if (hotelDto.getWorldCupPromo() != null) {
            existingHotel.setWorldCupPromo(hotelDto.getWorldCupPromo());
        }
        
        if (hotelDto.getRooms() != null) {
            existingHotel.setRoomsCount(hotelDto.getRooms());
        }
        
        existingHotel.setUpdatedAt(LocalDateTime.now());
        
        Hotel updatedHotel = hotelRepository.save(existingHotel);
        return modelMapper.map(updatedHotel, HotelDto.class);
    }

    @Override
    public void deleteHotel(Long id) {
        if (!hotelRepository.existsById(id)) {
            throw new ResourceNotFoundException("Hotel not found with id: " + id);
        }
        hotelRepository.deleteById(id);
    }
}

