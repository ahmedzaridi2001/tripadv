package com.maghrebvoyage.tripadvisorclone.controller;

import com.maghrebvoyage.tripadvisorclone.dto.PlaceDto;
import com.maghrebvoyage.tripadvisorclone.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/places")
@RequiredArgsConstructor
public class PlaceController {

  private final PlaceService placeService;

  @GetMapping
  public ResponseEntity<Page<PlaceDto>> getAllPlaces(
          @RequestParam(required = false) String search,
          @RequestParam(required = false) String category,
          @RequestParam(required = false) String location,
          @RequestParam(required = false) Double minRating,
          @RequestParam(required = false) String price,
          Pageable pageable) {
      return ResponseEntity.ok(placeService.searchPlaces(search, null, location, minRating, price, pageable));
  }

  @GetMapping("/{id}")
  public ResponseEntity<PlaceDto> getPlaceById(@PathVariable Long id) {
      return placeService.getPlaceById(id)
              .map(ResponseEntity::ok)
              .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<PlaceDto> createPlace(@Valid @RequestBody PlaceDto placeDto) {
      return ResponseEntity.ok(placeService.createPlace(placeDto));
  }

  @PutMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<PlaceDto> updatePlace(@PathVariable Long id, @Valid @RequestBody PlaceDto placeDto) {
      return ResponseEntity.ok(placeService.updatePlace(id, placeDto));
  }

  @DeleteMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Void> deletePlace(@PathVariable Long id) {
      placeService.deletePlace(id);
      return ResponseEntity.noContent().build();
  }
}

