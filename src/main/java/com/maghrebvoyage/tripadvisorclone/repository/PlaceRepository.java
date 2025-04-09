package com.maghrebvoyage.tripadvisorclone.repository;

import com.maghrebvoyage.tripadvisorclone.model.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {

    Page<Place> findByCategoryId(Long categoryId, Pageable pageable);
    
    Page<Place> findByDestinationId(Long destinationId, Pageable pageable);
    
    @Query("SELECT p FROM Place p WHERE " +
            "(:search IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(p.description) LIKE LOWER(CONCAT('%', :search, '%'))) AND " +
            "(:location IS NULL OR LOWER(p.location) = LOWER(:location)) AND " +
            "(:categoryId IS NULL OR p.category.id = :categoryId) AND " +
            "(:minRating IS NULL OR p.rating >= :minRating) AND " +
            "(:worldCupRelated IS NULL OR p.worldCupRelated = :worldCupRelated)")
    Page<Place> findByFilters(
            @Param("search") String search,
            @Param("location") String location,
            @Param("categoryId") Long categoryId,
            @Param("minRating") Double minRating,
            @Param("worldCupRelated") Boolean worldCupRelated,
            Pageable pageable);
}

