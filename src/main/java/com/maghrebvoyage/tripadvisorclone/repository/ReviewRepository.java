package com.maghrebvoyage.tripadvisorclone.repository;

import com.maghrebvoyage.tripadvisorclone.model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    Page<Review> findByPlaceId(Long placeId, Pageable pageable);
    
    Page<Review> findByUserId(Long userId, Pageable pageable);
    
    Long countByPlaceId(Long placeId);
    
    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.place.id = :placeId")
    Double calculateAverageRatingByPlaceId(@Param("placeId") Long placeId);
}

