package com.maghrebvoyage.tripadvisorclone.controller;

import com.maghrebvoyage.tripadvisorclone.dto.ItineraryDto;
import com.maghrebvoyage.tripadvisorclone.service.ItineraryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/api/itineraries")
@RequiredArgsConstructor
public class ItineraryController {

    private final ItineraryService itineraryService;

    @GetMapping
    public ResponseEntity<Page<ItineraryDto>> getAllItineraries(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String country,
            @RequestParam(required = false) String duration,
            @RequestParam(required = false) Boolean worldCupSpecial,
            Pageable pageable) {
        return ResponseEntity.ok(itineraryService.getAllItineraries(search, country, duration, worldCupSpecial, pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItineraryDto> getItineraryById(@PathVariable Long id) {
        return ResponseEntity.ok(itineraryService.getItineraryById(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ItineraryDto> createItinerary(@Valid @RequestBody ItineraryDto itineraryDto, Principal principal) {
        return ResponseEntity.ok(itineraryService.createItinerary(itineraryDto, principal.getName()));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ItineraryDto> updateItinerary(@PathVariable Long id, @Valid @RequestBody ItineraryDto itineraryDto, Principal principal) {
        return ResponseEntity.ok(itineraryService.updateItinerary(id, itineraryDto, principal.getName()));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteItinerary(@PathVariable Long id, Principal principal) {
        itineraryService.deleteItinerary(id, principal.getName());
        return ResponseEntity.noContent().build();
    }
}

