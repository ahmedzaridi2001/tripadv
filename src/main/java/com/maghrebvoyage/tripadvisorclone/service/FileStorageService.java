package com.maghrebvoyage.tripadvisorclone.service;

import com.maghrebvoyage.tripadvisorclone.dto.FileUploadResponseDto;
import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {
    FileUploadResponseDto storeFile(MultipartFile file);
    void deleteFile(String filename);
}

