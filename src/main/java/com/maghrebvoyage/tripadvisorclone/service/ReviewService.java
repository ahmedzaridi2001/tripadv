package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.ReviewDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface ReviewService {
    Page<ReviewDto> getAllReviews(Pageable pageable);
    
    Page<ReviewDto> getReviewsByPlace(Long placeId, Pageable pageable);
    
    Page<ReviewDto> getReviewsByUser(Long userId, Pageable pageable);
    
    Optional<ReviewDto> getReviewById(Long id);
    
    ReviewDto createReview(ReviewDto reviewDto);
    
    ReviewDto createReview(ReviewDto reviewDto, String username);
    
    ReviewDto updateReview(Long id, ReviewDto reviewDto);
    
    ReviewDto updateReview(Long id, ReviewDto reviewDto, String username);
    
    void deleteReview(Long id);
    
    void deleteReview(Long id, String username);
    
    ReviewDto likeReview(Long id);
    
    void likeReview(Long id, String username);
}

