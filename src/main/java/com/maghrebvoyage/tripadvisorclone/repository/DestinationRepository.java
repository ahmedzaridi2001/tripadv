package com.maghrebvoyage.tripadvisorclone.repository;

import com.maghrebvoyage.tripadvisorclone.model.Destination;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {
    
    Page<Destination> findByNameContainingIgnoreCase(String name, Pageable pageable);
    
    Page<Destination> findByCountryIgnoreCase(String country, Pageable pageable);
    
    Page<Destination> findByNameContainingIgnoreCaseAndCountryIgnoreCase(String name, String country, Pageable pageable);
}

