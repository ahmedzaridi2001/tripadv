package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.QuestionDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface QuestionService {
    Page<QuestionDto> getAllQuestions(String search, String category, Boolean worldCupRelated, Pageable pageable);
    QuestionDto getQuestionById(Long id);
    QuestionDto createQuestion(QuestionDto questionDto, String username);
    QuestionDto updateQuestion(Long id, QuestionDto questionDto, String username);
    void deleteQuestion(Long id, String username);
    void likeQuestion(Long id, String username);
}

