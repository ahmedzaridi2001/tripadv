package com.maghrebvoyage.tripadvisorclone.repository;

import com.maghrebvoyage.tripadvisorclone.model.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    @Query("SELECT r FROM Restaurant r WHERE " +
            "(:search IS NULL OR LOWER(r.name) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(r.description) LIKE LOWER(CONCAT('%', :search, '%'))) AND " +
            "(:city IS NULL OR LOWER(r.location) = LOWER(:city)) AND " +
            "(:cuisine IS NULL OR LOWER(r.cuisine) = LOWER(:cuisine)) AND " +
            "(:minRating IS NULL OR r.rating >= :minRating) AND " +
            "(:price IS NULL OR r.price = :price) AND " +
            "(:worldCupMenu IS NULL OR r.worldCupMenu = :worldCupMenu)")
    Page<Restaurant> findByFilters(
            @Param("search") String search,
            @Param("city") String city,
            @Param("cuisine") String cuisine,
            @Param("minRating") Double minRating,
            @Param("price") String price,
            @Param("worldCupMenu") Boolean worldCupMenu,
            Pageable pageable);
}

