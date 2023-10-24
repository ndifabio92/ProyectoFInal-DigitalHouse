package com.dh.canchas365.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ClubDTO {

    private Long id;

    private String name;

    private String phone_number;

    private Boolean recommended;

    private Long idAdress;
}
