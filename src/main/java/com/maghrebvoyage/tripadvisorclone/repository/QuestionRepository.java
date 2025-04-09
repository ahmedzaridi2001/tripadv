package com.maghrebvoyage.tripadvisorclone.repository;

import com.maghrebvoyage.tripadvisorclone.model.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query("SELECT q FROM Question q WHERE " +
            "(:search IS NULL OR LOWER(q.title) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(q.content) LIKE LOWER(CONCAT('%', :search, '%'))) AND " +
            "(:category IS NULL OR LOWER(q.category) = LOWER(:category)) AND " +
            "(:worldCupRelated IS NULL OR q.isWorldCupRelated = :worldCupRelated)")
    Page<Question> findBySearchCriteria(
            @Param("search") String search,
            @Param("category") String category,
            @Param("worldCupRelated") Boolean worldCupRelated,
            Pageable pageable);
}

