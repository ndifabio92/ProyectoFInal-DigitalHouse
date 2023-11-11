package com.dh.canchas365.dto;

import com.dh.canchas365.dto.location.AddressDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ClubDTO {

    private Long id;

    private String name;

    private String phone_number;

    private Boolean recommended;

    private AddressDTO address;

    private CategoryDto category;

    private CharacteristicsDto characteristics;

}
