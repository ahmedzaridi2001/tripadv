package com.maghrebvoyage.tripadvisorclone.controller;

import com.maghrebvoyage.tripadvisorclone.dto.SearchResultDto;
import com.maghrebvoyage.tripadvisorclone.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/search")
@RequiredArgsConstructor
public class SearchController {

    private final SearchService searchService;

    @GetMapping
    public ResponseEntity<Page<SearchResultDto>> search(
            @RequestParam String query,
            @RequestParam(required = false) String type,
            Pageable pageable) {
        return ResponseEntity.ok(searchService.search(query, type, pageable));
    }
}

