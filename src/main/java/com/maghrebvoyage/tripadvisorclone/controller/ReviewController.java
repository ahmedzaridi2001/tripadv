package com.maghrebvoyage.tripadvisorclone.controller;

import com.maghrebvoyage.tripadvisorclone.dto.ReviewDto;
import com.maghrebvoyage.tripadvisorclone.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

  private final ReviewService reviewService;

  @GetMapping
  public ResponseEntity<Page<ReviewDto>> getAllReviews(
          @RequestParam(required = false) Long placeId,
          Pageable pageable) {
      if (placeId != null) {
          return ResponseEntity.ok(reviewService.getReviewsByPlace(placeId, pageable));
      }
      return ResponseEntity.ok(reviewService.getAllReviews(pageable));
  }

  @GetMapping("/{id}")
  public ResponseEntity<ReviewDto> getReviewById(@PathVariable Long id) {
      return reviewService.getReviewById(id)
              .map(ResponseEntity::ok)
              .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  @PreAuthorize("isAuthenticated()")
  public ResponseEntity<ReviewDto> createReview(@Valid @RequestBody ReviewDto reviewDto, Principal principal) {
      return ResponseEntity.ok(reviewService.createReview(reviewDto, principal.getName()));
  }

  @PutMapping("/{id}")
  @PreAuthorize("isAuthenticated()")
  public ResponseEntity<ReviewDto> updateReview(@PathVariable Long id, @Valid @RequestBody ReviewDto reviewDto, Principal principal) {
      return ResponseEntity.ok(reviewService.updateReview(id, reviewDto, principal.getName()));
  }

  @DeleteMapping("/{id}")
  @PreAuthorize("isAuthenticated()")
  public ResponseEntity<Void> deleteReview(@PathVariable Long id, Principal principal) {
      reviewService.deleteReview(id, principal.getName());
      return ResponseEntity.noContent().build();
  }

  @PostMapping("/{id}/like")
  @PreAuthorize("isAuthenticated()")
  public ResponseEntity<Void> likeReview(@PathVariable Long id, Principal principal) {
      reviewService.likeReview(id, principal.getName());
      return ResponseEntity.ok().build();
  }
}

