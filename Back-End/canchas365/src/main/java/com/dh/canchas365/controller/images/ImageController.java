package com.dh.canchas365.controller.images;

import com.dh.canchas365.dto.ClubDTO;
import com.dh.canchas365.dto.images.ImageDTO;
import com.dh.canchas365.exceptions.ResourceNotFoundException;
import com.dh.canchas365.model.Club;
import com.dh.canchas365.model.images.Images;
import com.dh.canchas365.service.images.ImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private ImagesService imagesService;

    @PostMapping
    public ResponseEntity<Images> createImage(@RequestBody ImageDTO dto){
        return new ResponseEntity<Images>(imagesService.create(dto), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public List<Images> getAllClubs(){
        return imagesService.getAllImages();
    }

    @GetMapping("/{idImage}")
    public ResponseEntity<Images> getImageById(@PathVariable("idImage") Long id){
        ResponseEntity<Images> response =  null;
        Images club = imagesService.findById(id);
        if(club == null){
            response = new ResponseEntity<Images>( HttpStatus.NO_CONTENT);
        }
        else response = new ResponseEntity<Images>(club, HttpStatus.OK);
        return response;
    }

    @PutMapping
    public ResponseEntity<Images> updateImage(@RequestBody Images image) throws ResourceNotFoundException {
        ResponseEntity<Images> responseEntity = null;

        if(imagesService.findById(image.getId()) == null){
            responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe imagen con el id "+image.getId());
        }
        else{
            responseEntity = new ResponseEntity<Images>(imagesService.updateImage(image), HttpStatus.OK);
        }
        return responseEntity;
    }

    @GetMapping("/club/{idImage}")
    public List<Images> getImagesByClub(@PathVariable("idImage") Long id){
        return imagesService.getImagesByClub(id);
    }
}
