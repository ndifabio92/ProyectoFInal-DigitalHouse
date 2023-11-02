package com.dh.canchas365.controller;

import com.dh.canchas365.dto.ClubCreateDto;
import com.dh.canchas365.dto.ClubDTO;
import com.dh.canchas365.exceptions.ResourceDuplicateException;
import com.dh.canchas365.exceptions.ResourceNotFoundException;
import com.dh.canchas365.model.Club;
import com.dh.canchas365.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/club")
public class ClubController {

    @Autowired
    private ClubService clubService;

    @PostMapping
    public ResponseEntity<?> createClub(@RequestBody ClubCreateDto dto){
        try {
            return new ResponseEntity<Club>(clubService.createClub(dto), HttpStatus.CREATED);
        } catch (ResourceDuplicateException e) {
            return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @GetMapping("/list")
    public List<ClubDTO> getAllClubs(){
        return clubService.getAllClubs();
    }

    @GetMapping("/{idClub}")
    public ResponseEntity<ClubDTO> getClubById(@PathVariable("idClub") Long id){
        ResponseEntity<ClubDTO> response =  null;
        ClubDTO club = clubService.findById(id);
        if(club == null){
            response = new ResponseEntity<ClubDTO>( HttpStatus.NO_CONTENT);
        }
        else response = new ResponseEntity<ClubDTO>(club, HttpStatus.OK);
        return response;
    }

    @PutMapping
    public ResponseEntity<ClubDTO> updateClub(@RequestBody Club club) throws ResourceNotFoundException {
        ResponseEntity<ClubDTO> responseEntity = null;

        if(clubService.findById(club.getId()) == null){
            responseEntity = new ResponseEntity<ClubDTO>(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe club con el id "+club.getId());
        }
        else{
            responseEntity = new ResponseEntity<ClubDTO>(clubService.updateClub(club), HttpStatus.OK);
        }
        return responseEntity;
    }

    @DeleteMapping("/{idClub}")
    public ResponseEntity<ClubDTO>  deleteClub(@PathVariable("idClub") Long id) throws ResourceNotFoundException {
        ResponseEntity<ClubDTO> responseEntity = null;
        ClubDTO club = clubService.findById(id);
        if( club == null){
            responseEntity = new ResponseEntity(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe club con el id "+id);
        }
        else{
            System.out.println("la concha de la lora");
            clubService.deleteClub(club.getId());
            responseEntity = new ResponseEntity<ClubDTO>(HttpStatus.OK);
        }
        return responseEntity;
    }

    @GetMapping("/recommended")
    public List<ClubDTO> getClubsrecommended(){
        return clubService.getClubsRecommended();
    }

    @GetMapping("/random")
    public List<ClubDTO> getRandomClubs(){
        return clubService.getRandomClubs();
    }
}
