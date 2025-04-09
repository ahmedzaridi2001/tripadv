package com.maghrebvoyage.tripadvisorclone.controller;

import com.maghrebvoyage.tripadvisorclone.dto.FileUploadResponseDto;
import com.maghrebvoyage.tripadvisorclone.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
public class FileUploadController {

  private final FileStorageService fileStorageService;

  @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  @PreAuthorize("isAuthenticated()")
  public ResponseEntity<FileUploadResponseDto> uploadFile(@RequestParam("file") MultipartFile file) {
      FileUploadResponseDto response = fileStorageService.storeFile(file);
      return ResponseEntity.ok(response);
  }

  @DeleteMapping("/{filename}")
  @PreAuthorize("isAuthenticated()")
  public ResponseEntity<Void> deleteFile(@PathVariable String filename) {
      fileStorageService.deleteFile(filename);
      return ResponseEntity.noContent().build();
  }
}

