package com.maghrebvoyage.tripadvisorclone.controller;

import com.maghrebvoyage.tripadvisorclone.dto.DestinationDto;
import com.maghrebvoyage.tripadvisorclone.dto.PlaceDto;
import com.maghrebvoyage.tripadvisorclone.service.DestinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/destinations")
@RequiredArgsConstructor
public class DestinationController {

    private final DestinationService destinationService;

    @GetMapping
    public ResponseEntity<Page<DestinationDto>> getAllDestinations(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String country,
            Pageable pageable) {
        return ResponseEntity.ok(destinationService.getAllDestinations(search, country, pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DestinationDto> getDestinationById(@PathVariable Long id) {
        return ResponseEntity.ok(destinationService.getDestinationById(id));
    }

    @GetMapping("/{id}/places")
    public ResponseEntity<Page<PlaceDto>> getPlacesByDestination(
            @PathVariable Long id,
            @RequestParam(required = false) String category,
            Pageable pageable) {
        return ResponseEntity.ok(destinationService.getPlacesByDestination(id, category, pageable));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DestinationDto> createDestination(@Valid @RequestBody DestinationDto destinationDto) {
        return ResponseEntity.ok(destinationService.createDestination(destinationDto));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DestinationDto> updateDestination(@PathVariable Long id, @Valid @RequestBody DestinationDto destinationDto) {
        return ResponseEntity.ok(destinationService.updateDestination(id, destinationDto));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteDestination(@PathVariable Long id) {
        destinationService.deleteDestination(id);
        return ResponseEntity.noContent().build();
    }
}

