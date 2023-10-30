package com.dh.canchas365.dto;

import com.dh.canchas365.model.Sport;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PlayingFieldDTO {

    private Long id;

    private String description;

    private Long idClub;

    //private Long idSport;

    private Sport sport;
}
