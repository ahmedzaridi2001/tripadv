package com.maghrebvoyage.tripadvisorclone.repository;

import com.maghrebvoyage.tripadvisorclone.model.Itinerary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {

  @Query("SELECT i FROM Itinerary i WHERE " +
          "(:search IS NULL OR LOWER(i.title) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(i.description) LIKE LOWER(CONCAT('%', :search, '%'))) AND " +
          "(:country IS NULL OR i.id IN (SELECT ic.id FROM Itinerary ic JOIN ic.countries c WHERE LOWER(c) = LOWER(:country))) AND " +
          "(:duration IS NULL OR i.duration = :duration) AND " +
          "(:worldCupSpecial IS NULL OR i.worldCupSpecial = :worldCupSpecial)")
  Page<Itinerary> findBySearchCriteria(
          @Param("search") String search,
          @Param("country") String country,
          @Param("duration") String duration,
          @Param("worldCupSpecial") Boolean worldCupSpecial,
          Pageable pageable);
}

