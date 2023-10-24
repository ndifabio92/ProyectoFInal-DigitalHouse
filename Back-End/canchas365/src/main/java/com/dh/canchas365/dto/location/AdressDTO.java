package com.dh.canchas365.dto.location;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdressDTO {

    private Long id;

    private String street;

    private Integer number;

    private Integer floor;

    private String apartment;

    private Long idCity;
}
