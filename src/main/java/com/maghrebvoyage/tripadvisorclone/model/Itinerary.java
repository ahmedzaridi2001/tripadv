package com.maghrebvoyage.tripadvisorclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "itineraries")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Itinerary {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String title;

  @Column(length = 2000)
  private String description;

  private String image;

  private Integer duration;  // Changé de String à Integer pour correspondre au DTO

  @ElementCollection
  @CollectionTable(name = "itinerary_countries", joinColumns = @JoinColumn(name = "itinerary_id"))
  @Column(name = "country")
  private Set<String> countries = new HashSet<>();

  @ElementCollection
  @CollectionTable(name = "itinerary_cities", joinColumns = @JoinColumn(name = "itinerary_id"))
  @Column(name = "city")
  private Set<String> cities = new HashSet<>();

  @ElementCollection
  @CollectionTable(name = "itinerary_highlights", joinColumns = @JoinColumn(name = "itinerary_id"))
  @Column(name = "highlight")
  private List<String> highlights = new ArrayList<>();

  private Boolean worldCupSpecial;

  @ManyToOne
  @JoinColumn(name = "creator_id")
  private User creator;

  @CreatedDate
  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt;

  @LastModifiedDate
  @Column(nullable = false)
  private LocalDateTime updatedAt;
}

