package com.dh.canchas365.controller.images;

import com.dh.canchas365.dto.images.ImageDto;
import com.dh.canchas365.service.images.ImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private ImagesService imagesService;

    @GetMapping("/club/{idClub}")
    public List<ImageDto> getImagesByClub(@PathVariable("idClub") Long id ){
        return imagesService.getImagesByClub(id);
    }

}
