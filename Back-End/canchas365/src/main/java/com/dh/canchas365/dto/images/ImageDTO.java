package com.dh.canchas365.dto.images;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ImageDTO {

    private Long id;

    private String url;

    private Long idClub;
}
