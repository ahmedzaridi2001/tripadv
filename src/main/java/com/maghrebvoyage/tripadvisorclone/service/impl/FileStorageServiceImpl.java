package com.maghrebvoyage.tripadvisorclone.service.impl;

import com.maghrebvoyage.tripadvisorclone.dto.FileUploadResponseDto;
import com.maghrebvoyage.tripadvisorclone.service.FileStorageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileStorageServiceImpl implements FileStorageService {

  private final Path fileStorageLocation;

  public FileStorageServiceImpl(@Value("${file.upload-dir:uploads}") String uploadDir) {
      this.fileStorageLocation = Paths.get(uploadDir)
              .toAbsolutePath().normalize();

      try {
          Files.createDirectories(this.fileStorageLocation);
      } catch (Exception ex) {
          throw new RuntimeException("Could not create the directory where the uploaded files will be stored.", ex);
      }
  }

  @Override
  public FileUploadResponseDto storeFile(MultipartFile file) {
      // Normalize file name
      String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
      
      // Check if the file's name contains invalid characters
      if (originalFileName.contains("..")) {
          throw new RuntimeException("Sorry! Filename contains invalid path sequence " + originalFileName);
      }
      
      // Generate a unique file name to prevent duplicates
      String fileExtension = "";
      if (originalFileName.contains(".")) {
          fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
      }
      String uniqueFileName = UUID.randomUUID().toString() + fileExtension;
      
      try {
          // Copy file to the target location (Replacing existing file with the same name)
          Path targetLocation = this.fileStorageLocation.resolve(uniqueFileName);
          Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
          
          String fileUrl = "/uploads/" + uniqueFileName;
          
          return new FileUploadResponseDto(uniqueFileName, fileUrl, file.getContentType(), file.getSize());
      } catch (IOException ex) {
          throw new RuntimeException("Could not store file " + originalFileName + ". Please try again!", ex);
      }
  }
  
  @Override
  public void deleteFile(String filename) {
      try {
          Path filePath = this.fileStorageLocation.resolve(filename).normalize();
          Files.deleteIfExists(filePath);
      } catch (IOException ex) {
          throw new RuntimeException("Error deleting file " + filename, ex);
      }
  }
}

