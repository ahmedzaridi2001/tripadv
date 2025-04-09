package com.maghrebvoyage.tripadvisorclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "places")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(length = 2000)
    private String description;

    @Column(nullable = false)
    private String location;

    private String address;

    @ElementCollection
    @CollectionTable(name = "place_images", joinColumns = @JoinColumn(name = "place_id"))
    @Column(name = "image_url")
    private List<String> images = new ArrayList<>();

    private Double rating;

    private Integer reviewsCount;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    private String price;

    private String openingHours;

    private String phone;

    private String website;

    @ElementCollection
    @CollectionTable(name = "place_features", joinColumns = @JoinColumn(name = "place_id"))
    @Column(name = "feature")
    private Set<String> features = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "destination_id")
    private Destination destination;

    private Double latitude;
    
    private Double longitude;
    
    private Boolean worldCupRelated;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime updatedAt;
}

