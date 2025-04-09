package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.CategoryDto;
import com.maghrebvoyage.tripadvisorclone.dto.PlaceDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.Category;
import com.maghrebvoyage.tripadvisorclone.repository.CategoryRepository;
import com.maghrebvoyage.tripadvisorclone.repository.PlaceRepository;
import com.maghrebvoyage.tripadvisorclone.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Transactional
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final PlaceRepository placeRepository;
    private final ModelMapper modelMapper;

    @Override
    public Page<CategoryDto> getAllCategories(Pageable pageable) {
        return categoryRepository.findAll(pageable)
                .map(category -> modelMapper.map(category, CategoryDto.class));
    }

    @Override
    public CategoryDto getCategoryById(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + id));
        return modelMapper.map(category, CategoryDto.class);
    }

    @Override
    public Page<PlaceDto> getPlacesByCategory(Long id, Pageable pageable) {
        if (!categoryRepository.existsById(id)) {
            throw new ResourceNotFoundException("Category not found with id: " + id);
        }
        return placeRepository.findByCategoryId(id, pageable)
                .map(place -> modelMapper.map(place, PlaceDto.class));
    }

    @Override
    public CategoryDto createCategory(CategoryDto categoryDto) {
        Category category = modelMapper.map(categoryDto, Category.class);
        category.setCreatedAt(LocalDateTime.now());
        category.setUpdatedAt(LocalDateTime.now());
        Category savedCategory = categoryRepository.save(category);
        return modelMapper.map(savedCategory, CategoryDto.class);
    }

    @Override
    public CategoryDto updateCategory(Long id, CategoryDto categoryDto) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + id));
        
        modelMapper.map(categoryDto, category);
        category.setId(id); // Ensure ID is preserved
        category.setUpdatedAt(LocalDateTime.now());
        
        Category updatedCategory = categoryRepository.save(category);
        return modelMapper.map(updatedCategory, CategoryDto.class);
    }

    @Override
    public void deleteCategory(Long id) {
        if (!categoryRepository.existsById(id)) {
            throw new ResourceNotFoundException("Category not found with id: " + id);
        }
        categoryRepository.deleteById(id);
    }
}

