package com.maghrebvoyage.tripadvisorclone.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FileUploadResponseDto {
    private String fileUrl;
    private String fileName;
    private String fileType;
    private Long fileSize;
    
    public FileUploadResponseDto(String fileUrl) {
        this.fileUrl = fileUrl;
    }
}

