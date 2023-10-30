package com.dh.canchas365.controller;

import com.dh.canchas365.dto.ClubDTO;
import com.dh.canchas365.dto.PlayingFieldDTO;
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
    public ResponseEntity<?> createPlayingField(@RequestBody PlayingFieldDTO dto){
        try {
            return new ResponseEntity<PlayingFieldDTO>(playingFieldService.create(dto), HttpStatus.CREATED);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/list")
    public List<PlayingFieldDTO> getAllPlayingFields(){
        return playingFieldService.getAllPlayingFields();
    }

    @GetMapping("/{idPlayingField}")
    public ResponseEntity<PlayingFieldDTO> getPlayingFieldById(@PathVariable("idPlayingField") Long id){
        ResponseEntity<PlayingFieldDTO> response =  null;
        PlayingFieldDTO playingField = playingFieldService.findById(id);
        if(playingField == null){
            response = new ResponseEntity<PlayingFieldDTO>( HttpStatus.NO_CONTENT);
        }
        else response = new ResponseEntity<PlayingFieldDTO>(playingField, HttpStatus.OK);
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
    public ResponseEntity<PlayingFieldDTO> deletePlayingField(@PathVariable("idPlayingField") Long id) throws ResourceNotFoundException {
        ResponseEntity<PlayingFieldDTO> responseEntity = null;
        PlayingFieldDTO playingFieldDTO = playingFieldService.findById(id);
        if( playingFieldDTO == null){
            responseEntity = new ResponseEntity(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe cancha con el id "+id);
        }
        else{
//            System.out.println("la concha de la lora");
            playingFieldService.deletePlayingField(playingFieldDTO.getId());
            responseEntity = new ResponseEntity<PlayingFieldDTO>(HttpStatus.OK);
        }
        return responseEntity;
    }

    @GetMapping("/club/{idClub}")
    public List<PlayingFieldDTO> getPlayingFieldByClub(@PathVariable("idClub") Long id){
        return playingFieldService.getPlayingFieldByClub(id);
    }
}
