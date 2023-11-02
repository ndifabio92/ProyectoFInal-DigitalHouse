package com.dh.canchas365.controller;

import com.dh.canchas365.dto.PlayingFieldDto;
import com.dh.canchas365.exceptions.ResourceNotFoundException;
import com.dh.canchas365.model.PlayingField;
import com.dh.canchas365.service.PlayingFieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/playingField")
public class PlayingFieldController {

    @Autowired
    private PlayingFieldService playingFieldService;

    @PostMapping
    public ResponseEntity<?> createPlayingField(@RequestBody PlayingFieldDto dto){
        try {
            return new ResponseEntity<PlayingFieldDto>(playingFieldService.create(dto), HttpStatus.CREATED);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/list")
    public List<PlayingFieldDto> getAllPlayingFields(){
        return playingFieldService.getAllPlayingFields();
    }

    @GetMapping("/{idPlayingField}")
    public ResponseEntity<PlayingFieldDto> getPlayingFieldById(@PathVariable("idPlayingField") Long id){
        ResponseEntity<PlayingFieldDto> response =  null;
        PlayingFieldDto playingField = playingFieldService.findById(id);
        if(playingField == null){
            response = new ResponseEntity<PlayingFieldDto>( HttpStatus.NO_CONTENT);
        }
        else response = new ResponseEntity<PlayingFieldDto>(playingField, HttpStatus.OK);
        return response;
    }

    @PutMapping
    public ResponseEntity<PlayingField> updatePlayingField(@RequestBody PlayingField playingField) throws ResourceNotFoundException {
        ResponseEntity<PlayingField> responseEntity = null;

        if(playingFieldService.findById(playingField.getId()) == null){
            responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe playingField con el id "+playingField.getId());
        }
        else{
            responseEntity = new ResponseEntity<PlayingField>(playingFieldService.updatePlayingField(playingField), HttpStatus.OK);
        }
        return responseEntity;
    }

    @DeleteMapping("/{idPlayingField}")
    public ResponseEntity<PlayingFieldDto> deletePlayingField(@PathVariable("idPlayingField") Long id) throws ResourceNotFoundException {
        ResponseEntity<PlayingFieldDto> responseEntity = null;
        PlayingFieldDto playingFieldDTO = playingFieldService.findById(id);
        if( playingFieldDTO == null){
            responseEntity = new ResponseEntity(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe cancha con el id "+id);
        }
        else{
//            System.out.println("la concha de la lora");
            playingFieldService.deletePlayingField(playingFieldDTO.getId());
            responseEntity = new ResponseEntity<PlayingFieldDto>(HttpStatus.OK);
        }
        return responseEntity;
    }

    @GetMapping("/club/{idClub}")
    public List<PlayingFieldDto> getPlayingFieldByClub(@PathVariable("idClub") Long id){
        return playingFieldService.getPlayingFieldByClub(id);
    }
}
