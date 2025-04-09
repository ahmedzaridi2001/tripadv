package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.QuestionDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.Question;
import com.maghrebvoyage.tripadvisorclone.model.User;
import com.maghrebvoyage.tripadvisorclone.repository.QuestionRepository;
import com.maghrebvoyage.tripadvisorclone.repository.UserRepository;
import com.maghrebvoyage.tripadvisorclone.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public Page<QuestionDto> getAllQuestions(String search, String category, Boolean worldCupRelated, Pageable pageable) {
        Page<Question> questions;
        
        if (search != null || category != null || worldCupRelated != null) {
            questions = questionRepository.findBySearchCriteria(search, category, worldCupRelated, pageable);
        } else {
            questions = questionRepository.findAll(pageable);
        }
        
        return questions.map(question -> modelMapper.map(question, QuestionDto.class));
    }

    @Override
    public QuestionDto getQuestionById(Long id) {
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Question not found with id: " + id));
        return modelMapper.map(question, QuestionDto.class);
    }

    @Override
    @Transactional
    public QuestionDto createQuestion(QuestionDto questionDto, String username) {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
        
        Question question = modelMapper.map(questionDto, Question.class);
        question.setUser(user);
        question.setCreatedAt(LocalDateTime.now());
        question.setUpdatedAt(LocalDateTime.now());
        question.setLikes(0);
        question.setAnswersCount(0);
        
        Question savedQuestion = questionRepository.save(question);
        return modelMapper.map(savedQuestion, QuestionDto.class);
    }

    @Override
    @Transactional
    public QuestionDto updateQuestion(Long id, QuestionDto questionDto, String username) {
        Question existingQuestion = questionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Question not found with id: " + id));
        
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
        
        // Check if the user is the author of the question
        if (!existingQuestion.getUser().getId().equals(user.getId())) {
            throw new IllegalStateException("You are not authorized to update this question");
        }
        
        // Update fields
        if (questionDto.getTitle() != null) {
            existingQuestion.setTitle(questionDto.getTitle());
        }
        
        if (questionDto.getContent() != null) {
            existingQuestion.setContent(questionDto.getContent());
        }
        
        if (questionDto.getCategory() != null) {
            existingQuestion.setCategory(questionDto.getCategory());
        }
        
        if (questionDto.getIsWorldCupRelated() != null) {
            existingQuestion.setIsWorldCupRelated(questionDto.getIsWorldCupRelated());
        }
        
        existingQuestion.setUpdatedAt(LocalDateTime.now());
        
        Question updatedQuestion = questionRepository.save(existingQuestion);
        return modelMapper.map(updatedQuestion, QuestionDto.class);
    }

    @Override
    @Transactional
    public void deleteQuestion(Long id, String username) {
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Question not found with id: " + id));
        
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + username));
        
        // Check if the user is the author of the question
        if (!question.getUser().getId().equals(user.getId())) {
            throw new IllegalStateException("You are not authorized to delete this question");
        }
        
        questionRepository.delete(question);
    }

    @Override
    @Transactional
    public void likeQuestion(Long id, String username) {
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Question not found with id: " + id));
        
        // Increment likes
        question.setLikes(question.getLikes() + 1);
        questionRepository.save(question);
    }
}

