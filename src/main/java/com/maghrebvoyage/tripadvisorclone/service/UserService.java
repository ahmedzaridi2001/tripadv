package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.UserDto;
import com.maghrebvoyage.tripadvisorclone.dto.UserProfileDto;
import com.maghrebvoyage.tripadvisorclone.exception.ResourceNotFoundException;
import com.maghrebvoyage.tripadvisorclone.model.User;
import com.maghrebvoyage.tripadvisorclone.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
    }

    public UserDto getUserByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
        return modelMapper.map(user, UserDto.class);
    }

    public UserProfileDto getUserProfile(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return modelMapper.map(user, UserProfileDto.class);
    }

    public UserDto updateUser(UserDto userDto, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));

        // Update user fields
        user.setName(userDto.getName());
        user.setLocation(userDto.getLocation());
        user.setBio(userDto.getBio());
        user.setWebsite(userDto.getWebsite());
        user.setAvatarUrl(userDto.getAvatarUrl());
        user.setNationality(userDto.getNationality());
        user.setAge(userDto.getAge());

        // Save updated user
        User updatedUser = userRepository.save(user);
        return modelMapper.map(updatedUser, UserDto.class);
    }

    public void deleteUser(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
        userRepository.delete(user);
    }
}

