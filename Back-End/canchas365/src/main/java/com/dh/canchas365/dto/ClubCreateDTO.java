package com.dh.canchas365.dto;

import com.dh.canchas365.dto.images.ImageDto;
import com.dh.canchas365.dto.location.AddressDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ClubCreateDto {

    private Long id;

    private String name;

    private String phone_number;

    private Boolean recommended;

    private AddressDto address;

    private Long id_category;

    private Set<ImageDto> images;
}
