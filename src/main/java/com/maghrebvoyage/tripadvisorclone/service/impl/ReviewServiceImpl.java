package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.ReviewDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.Place;
import com.maghrebvoyage.tripadvisorclone.model.Review;
import com.maghrebvoyage.tripadvisorclone.model.User;
import com.maghrebvoyage.tripadvisorclone.repository.PlaceRepository;
import com.maghrebvoyage.tripadvisorclone.repository.ReviewRepository;
import com.maghrebvoyage.tripadvisorclone.repository.UserRepository;
import com.maghrebvoyage.tripadvisorclone.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;
    private final ModelMapper modelMapper;

    @Override
    public Page<ReviewDto> getAllReviews(Pageable pageable) {
        return reviewRepository.findAll(pageable)
                .map(review -> modelMapper.map(review, ReviewDto.class));
    }

    @Override
    public Page<ReviewDto> getReviewsByPlace(Long placeId, Pageable pageable) {
        if (!placeRepository.existsById(placeId)) {
            throw new ResourceNotFoundException("Place not found with id: " + placeId);
        }
        return reviewRepository.findByPlaceId(placeId, pageable)
                .map(review -> modelMapper.map(review, ReviewDto.class));
    }

    @Override
    public Page<ReviewDto> getReviewsByUser(Long userId, Pageable pageable) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User not found with id: " + userId);
        }
        return reviewRepository.findByUserId(userId, pageable)
                .map(review -> modelMapper.map(review, ReviewDto.class));
    }

    @Override
    public Optional<ReviewDto> getReviewById(Long id) {
        return reviewRepository.findById(id)
                .map(review -> modelMapper.map(review, ReviewDto.class));
    }

    @Override
    @Transactional
    public ReviewDto createReview(ReviewDto reviewDto) {
        Review review = modelMapper.map(reviewDto, Review.class);
        Review savedReview = reviewRepository.save(review);
        return modelMapper.map(savedReview, ReviewDto.class);
    }

    @Override
    @Transactional
    public ReviewDto createReview(ReviewDto reviewDto, String username) {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
        
        Place place = placeRepository.findById(reviewDto.getPlaceId())
                .orElseThrow(() -> new ResourceNotFoundException("Place not found with id: " + reviewDto.getPlaceId()));
        
        Review review = modelMapper.map(reviewDto, Review.class);
        review.setUser(user);
        review.setPlace(place);
        review.setCreatedAt(LocalDateTime.now());
        review.setUpdatedAt(LocalDateTime.now());
        review.setLikes(0);
        
        if (review.getImages() == null) {
            review.setImages(new ArrayList<>());
        }
        
        Review savedReview = reviewRepository.save(review);
        
        // Update place rating
        updatePlaceRating(place.getId());
        
        return modelMapper.map(savedReview, ReviewDto.class);
    }

    @Override
    @Transactional
    public ReviewDto updateReview(Long id, ReviewDto reviewDto) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));
        
        modelMapper.map(reviewDto, review);
        review.setId(id); // Ensure ID is preserved
        review.setUpdatedAt(LocalDateTime.now());
        
        Review updatedReview = reviewRepository.save(review);
        
        // Update place rating
        updatePlaceRating(updatedReview.getPlace().getId());
        
        return modelMapper.map(updatedReview, ReviewDto.class);
    }

    @Override
    @Transactional
    public ReviewDto updateReview(Long id, ReviewDto reviewDto, String username) {
        Review existingReview = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));
        
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
        
        // Check if the user is the author of the review
        if (!existingReview.getUser().getId().equals(user.getId())) {
            throw new IllegalStateException("You are not authorized to update this review");
        }
        
        // Update fields
        if (reviewDto.getContent() != null) {
            existingReview.setContent(reviewDto.getContent());
        }
        
        if (reviewDto.getRating() != null) {
            existingReview.setRating(reviewDto.getRating());
        }
        
        existingReview.setUpdatedAt(LocalDateTime.now());
        
        Review updatedReview = reviewRepository.save(existingReview);
        
        // Update place rating
        updatePlaceRating(existingReview.getPlace().getId());
        
        return modelMapper.map(updatedReview, ReviewDto.class);
    }

    @Override
    @Transactional
    public void deleteReview(Long id) {
        if (!reviewRepository.existsById(id)) {
            throw new ResourceNotFoundException("Review not found with id: " + id);
        }
        
        Review review = reviewRepository.findById(id).orElseThrow();
        Long placeId = review.getPlace().getId();
        
        reviewRepository.deleteById(id);
        
        // Update place rating
        updatePlaceRating(placeId);
    }

    @Override
    @Transactional
    public void deleteReview(Long id, String username) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));
        
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
        
        // Check if the user is the author of the review
        if (!review.getUser().getId().equals(user.getId())) {
            throw new IllegalStateException("You are not authorized to delete this review");
        }
        
        Long placeId = review.getPlace().getId();
        
        reviewRepository.delete(review);
        
        // Update place rating
        updatePlaceRating(placeId);
    }

    @Override
    @Transactional
    public ReviewDto likeReview(Long id) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));
        
        review.setLikes(review.getLikes() + 1);
        Review updatedReview = reviewRepository.save(review);
        return modelMapper.map(updatedReview, ReviewDto.class);
    }

    @Override
    @Transactional
    public void likeReview(Long id, String username) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));
        
        // Increment likes
        review.setLikes(review.getLikes() + 1);
        reviewRepository.save(review);
    }
    
    private void updatePlaceRating(Long placeId) {
        Place place = placeRepository.findById(placeId)
                .orElseThrow(() -> new ResourceNotFoundException("Place not found with id: " + placeId));
        
        Double avgRating = reviewRepository.calculateAverageRatingByPlaceId(placeId);
        Long reviewsCount = reviewRepository.countByPlaceId(placeId);
        
        place.setRating(avgRating != null ? avgRating : 0.0);
        place.setReviewsCount(reviewsCount.intValue());
        
        placeRepository.save(place);
    }
}

