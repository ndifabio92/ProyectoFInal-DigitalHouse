package com.dh.canchas365.dto;

import com.dh.canchas365.dto.location.CityDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SearchDto {
    private CategoryDto category;
    private CityDTO city;
    private LocalDateTime datetime;
}
