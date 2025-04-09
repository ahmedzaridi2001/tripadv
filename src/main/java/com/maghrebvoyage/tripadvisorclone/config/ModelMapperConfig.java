package com.maghrebvoyage.tripadvisorclone.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        // Vous pouvez configurer le ModelMapper ici si nécessaire
        return modelMapper;
    }
}

