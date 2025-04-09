package com.maghrebvoyage.tripadvisorclone.repository;

import com.maghrebvoyage.tripadvisorclone.model.Hotel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {

    @Query("SELECT h FROM Hotel h WHERE " +
            "(:search IS NULL OR LOWER(h.name) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(h.description) LIKE LOWER(CONCAT('%', :search, '%'))) AND " +
            "(:city IS NULL OR LOWER(h.location) = LOWER(:city)) AND " +
            "(:minRating IS NULL OR h.rating >= :minRating) AND " +
            "(:minPrice IS NULL OR h.pricePerNight >= :minPrice) AND " +
            "(:maxPrice IS NULL OR h.pricePerNight <= :maxPrice) AND " +
            "(:worldCupPromo IS NULL OR h.worldCupPromo = :worldCupPromo)")
    Page<Hotel> findByFilters(
            @Param("search") String search,
            @Param("city") String city,
            @Param("minRating") Double minRating,
            @Param("minPrice") Double minPrice,
            @Param("maxPrice") Double maxPrice,
            @Param("worldCupPromo") Boolean worldCupPromo,
            Pageable pageable);
}

