package com.dh.canchas365.controller;

import com.dh.canchas365.exceptions.ResourceNotFoundException;
import com.dh.canchas365.model.Sport;
import com.dh.canchas365.service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sport")
public class SportController {

    @Autowired
    private SportService sportService;

    @PostMapping
    public Sport createSport(@RequestBody Sport sport){
        return sportService.createSport(sport);
    }

    @GetMapping("/list")
    public List<Sport> getAllSports(){
        return sportService.getAllSports();
    }

    @GetMapping("/{idSport}")
    public ResponseEntity<Sport> getSportById(@PathVariable("idSport") Long id){
        ResponseEntity<Sport> response =  null;
        Sport sport = sportService.findById(id);
        if(sport == null){
            response = new ResponseEntity<Sport>( HttpStatus.NO_CONTENT);
        }
        else response = new ResponseEntity<Sport>(sport, HttpStatus.OK);
        return response;
    }

    @PutMapping
    public ResponseEntity<Sport> updateSport(@RequestBody Sport sport) throws ResourceNotFoundException {
        ResponseEntity<Sport> responseEntity = null;

        if(sportService.findById(sport.getId()) == null){
            responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe sport con el id "+sport.getId());
        }
        else{
            responseEntity = new ResponseEntity<Sport>(sportService.updateSport(sport), HttpStatus.OK);
        }
        return responseEntity;
    }
}
