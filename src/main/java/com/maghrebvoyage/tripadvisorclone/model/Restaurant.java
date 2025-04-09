package com.maghrebvoyage.tripadvisorclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "restaurants")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@EntityListeners(AuditingEntityListener.class)
public class Restaurant extends Place {

  private String cuisine;
  
  @ElementCollection
  @CollectionTable(name = "restaurant_features", joinColumns = @JoinColumn(name = "restaurant_id"))
  @Column(name = "feature")
  private Set<String> specialFeatures = new HashSet<>();
  
  private Boolean worldCupMenu;
  
  private Boolean reservationRequired;
  
  private Boolean vegetarianOptions;
  
  private Boolean veganOptions;
}

