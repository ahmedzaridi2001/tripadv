package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.AuthResponseDto;
import com.maghrebvoyage.tripadvisorclone.dto.LoginRequestDto;
import com.maghrebvoyage.tripadvisorclone.dto.RegisterRequestDto;
import com.maghrebvoyage.tripadvisorclone.dto.UserDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceAlreadyExistsException;
import com.maghrebvoyage.tripadvisorclone.model.User;
import com.maghrebvoyage.tripadvisorclone.repository.UserRepository;
import com.maghrebvoyage.tripadvisorclone.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final ModelMapper modelMapper;

    public AuthResponseDto register(RegisterRequestDto registerRequest) {
        // Check if user already exists
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new ResourceAlreadyExistsException("Email is already taken");
        }

        // Create new user
        User user = User.builder()
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .location(registerRequest.getLocation())
                .nationality(registerRequest.getNationality())
                .age(registerRequest.getAge())
                .roles(Collections.singleton("USER"))
                .build();

        User savedUser = userRepository.save(user);

        // Authenticate user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        registerRequest.getEmail(),
                        registerRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);

        return AuthResponseDto.builder()
                .token(jwt)
                .user(modelMapper.map(savedUser, UserDto.class))
                .build();
    }

    public AuthResponseDto login(LoginRequestDto loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);

        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return AuthResponseDto.builder()
                .token(jwt)
                .user(modelMapper.map(user, UserDto.class))
                .build();
    }
}

