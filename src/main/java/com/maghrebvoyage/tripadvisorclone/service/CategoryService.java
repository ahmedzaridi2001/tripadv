package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.CategoryDto;
import com.maghrebvoyage.tripadvisorclone.dto.PlaceDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CategoryService {
    Page<CategoryDto> getAllCategories(Pageable pageable);
    CategoryDto getCategoryById(Long id);
    Page<PlaceDto> getPlacesByCategory(Long id, Pageable pageable);
    CategoryDto createCategory(CategoryDto categoryDto);
    CategoryDto updateCategory(Long id, CategoryDto categoryDto);
    void deleteCategory(Long id);
}

