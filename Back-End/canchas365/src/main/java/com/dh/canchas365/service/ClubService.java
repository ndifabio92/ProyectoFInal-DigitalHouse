package com.dh.canchas365.service;

import com.dh.canchas365.dto.ClubDTO;
import com.dh.canchas365.model.Club;
import com.dh.canchas365.model.location.Adress;
import com.dh.canchas365.repository.ClubRepository;
import com.dh.canchas365.repository.location.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClubService {

    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private AddressRepository addressRepository;

    public Club createClub(Club club){
        return clubRepository.save(club);
    }

    public Club createClub(ClubDTO dto){
        Club club = new Club();
        club.setName(dto.getName());
        club.setPhone_number(dto.getPhone_number());
        club.setRecommended(dto.getRecommended());
        Optional<Adress> optionalAdress = addressRepository.findById(dto.getIdAdress());
        if(optionalAdress.isPresent()){
            club.setAdress(optionalAdress.get());
        }
        return clubRepository.save(club);
    }

    public Club updateClub(Club club){
        return clubRepository.save(club);
    }

    public List<Club> getAllClubs(){
        return clubRepository.findAll();
    }

    public void deleteClub(Long id){
        clubRepository.deleteById(id);
    }

    public Club findById(Long id){
        Optional<Club> clubOptional = clubRepository.findById(id);
        Club club = null;
        if(clubOptional.isPresent()){
            club = clubOptional.get();
        }
        return club;
    }

    public List<Club> getClubsRecommended(){
        return clubRepository.getClubRecommended();
    }
}
