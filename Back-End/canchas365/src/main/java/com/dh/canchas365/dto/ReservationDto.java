package com.dh.canchas365.dto;

import com.dh.canchas365.model.PlayingField;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReservationDto {
    private Long id;
    private PlayingField playingField;
    private LocalDateTime start_datetime;
    private LocalDateTime end_datetime;
}
