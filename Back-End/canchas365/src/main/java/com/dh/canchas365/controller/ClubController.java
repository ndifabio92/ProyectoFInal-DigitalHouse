package com.dh.canchas365.controller;

import com.dh.canchas365.dto.ClubDTO;
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
    public ResponseEntity<Club> createClub(@RequestBody ClubDTO dto){
        return new ResponseEntity<Club>(clubService.createClub(dto), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public List<Club> getAllClubs(){
        return clubService.getAllClubs();
    }

    @GetMapping("/{idClub}")
    public ResponseEntity<Club> getClubById(@PathVariable("idClub") Long id){
        ResponseEntity<Club> response =  null;
        Club club = clubService.findById(id);
        if(club == null){
            response = new ResponseEntity<Club>( HttpStatus.NO_CONTENT);
        }
        else response = new ResponseEntity<Club>(club, HttpStatus.OK);
        return response;
    }

    @PutMapping
    public ResponseEntity<Club> updateClub(@RequestBody Club club) throws ResourceNotFoundException {
        ResponseEntity<Club> responseEntity = null;

        if(clubService.findById(club.getId()) == null){
            responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe club con el id "+club.getId());
        }
        else{
            responseEntity = new ResponseEntity<Club>(clubService.updateClub(club), HttpStatus.OK);
        }
        return responseEntity;
    }

    @GetMapping("/recommended")
    public List<Club> getClubsrecommended(){
        return clubService.getClubsRecommended();
    }
}
