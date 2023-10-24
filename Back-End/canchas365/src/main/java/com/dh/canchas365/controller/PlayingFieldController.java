package com.dh.canchas365.controller;

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

//    @PostMapping
//    public PlayingField createPlayingField(@RequestBody PlayingField playingField){
//        return playingFieldService.createPlayingField(playingField);
//    }

    @PostMapping
    public ResponseEntity<PlayingField> createPlayingField(@RequestBody PlayingFieldDTO dto){
        return new ResponseEntity<PlayingField>(playingFieldService.create(dto), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public List<PlayingField> getAllPlayingFields(){
        return playingFieldService.getAllPlayingFields();
    }

    @GetMapping("/{idPlayingField}")
    public ResponseEntity<PlayingField> getPlayingFieldById(@PathVariable("idPlayingField") Long id){
        ResponseEntity<PlayingField> response =  null;
        PlayingField playingField = playingFieldService.findById(id);
        if(playingField == null){
            response = new ResponseEntity<PlayingField>( HttpStatus.NO_CONTENT);
        }
        else response = new ResponseEntity<PlayingField>(playingField, HttpStatus.OK);
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
}
