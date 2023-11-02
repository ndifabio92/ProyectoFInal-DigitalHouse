package com.dh.canchas365.controller;

import com.dh.canchas365.dto.ClubCreateDto;
import com.dh.canchas365.dto.ClubDto;
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
    public List<ClubDto> getAllClubs(){
        return clubService.getAllClubs();
    }

    @GetMapping("/{idClub}")
    public ResponseEntity<ClubDto> getClubById(@PathVariable("idClub") Long id){
        ResponseEntity<ClubDto> response =  null;
        ClubDto club = clubService.findById(id);
        if(club == null){
            response = new ResponseEntity<ClubDto>( HttpStatus.NO_CONTENT);
        }
        else response = new ResponseEntity<ClubDto>(club, HttpStatus.OK);
        return response;
    }

    @PutMapping
    public ResponseEntity<ClubDto> updateClub(@RequestBody Club club) throws ResourceNotFoundException {
        ResponseEntity<ClubDto> responseEntity = null;

        if(clubService.findById(club.getId()) == null){
            responseEntity = new ResponseEntity<ClubDto>(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe club con el id "+club.getId());
        }
        else{
            responseEntity = new ResponseEntity<ClubDto>(clubService.updateClub(club), HttpStatus.OK);
        }
        return responseEntity;
    }

    @DeleteMapping("/{idClub}")
    public ResponseEntity<ClubDto>  deleteClub(@PathVariable("idClub") Long id) throws ResourceNotFoundException {
        ResponseEntity<ClubDto> responseEntity = null;
        ClubDto club = clubService.findById(id);
        if( club == null){
            responseEntity = new ResponseEntity(HttpStatus.NOT_FOUND);
            throw new ResourceNotFoundException("No existe club con el id "+id);
        }
        else{
            System.out.println("la concha de la lora");
            clubService.deleteClub(club.getId());
            responseEntity = new ResponseEntity<ClubDto>(HttpStatus.OK);
        }
        return responseEntity;
    }

    @GetMapping("/recommended")
    public List<ClubDto> getClubsrecommended(){
        return clubService.getClubsRecommended();
    }

    @GetMapping("/random")
    public List<ClubDto> getRandomClubs(){
        return clubService.getRandomClubs();
    }
}
