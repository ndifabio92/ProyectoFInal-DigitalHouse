package com.dh.canchas365.service;

import com.dh.canchas365.dto.ClubCreateDto;
import com.dh.canchas365.dto.ClubDto;
import com.dh.canchas365.dto.images.ImageDto;
import com.dh.canchas365.exceptions.ResourceDuplicateException;
import com.dh.canchas365.model.Club;
import com.dh.canchas365.model.images.Images;
import com.dh.canchas365.model.location.Address;
import com.dh.canchas365.repository.ClubRepository;
import com.dh.canchas365.repository.images.ImagesRepository;
import com.dh.canchas365.repository.location.AddressRepository;
import com.dh.canchas365.service.location.AdressService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ClubService {

    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private AdressService adressService;

    @Autowired
    private ImagesRepository imagesRepository;

    @Transactional
    public Club createClub(ClubCreateDto dto) throws ResourceDuplicateException {
        Club clubToSave = new Club();
        clubToSave.setName(dto.getName());
        clubToSave.setPhone_number(dto.getPhone_number());
        clubToSave.setRecommended(dto.getRecommended());

        Optional<Club> optionalClub = clubRepository.findByName(dto.getName());
        if(optionalClub.isPresent()){
            throw new ResourceDuplicateException("Ese nombre de Club ya existe");
        }

        Optional<Address> optionalAdress = addressRepository.findByAddress(dto.getAddress().getStreet(), dto.getAddress().getNumber(), dto.getAddress().getCity().getId());
        if(optionalAdress.isPresent()){
            clubToSave.setAddress(optionalAdress.get());
        }
        else{
            Address addressSaved = adressService.createAddress(dto.getAddress());
            clubToSave.setAddress(addressSaved);
        }

        Club clubSaved = clubRepository.save(clubToSave);

        List<Images> imagesTosave = new ArrayList<>();
        for(ImageDto imgDto: dto.getImages()){
            Images imageToSave = new Images();
            imageToSave.setUrl(imgDto.getUrl());
            imageToSave.setClub(clubSaved);
            imagesTosave.add(imageToSave);
        }

        imagesRepository.saveAll(imagesTosave);

        return clubSaved;
    }
    @Transactional
    public ClubDto updateClub(Club club){

        Club clubSaved = clubRepository.save(club);

        ModelMapper mapper = new ModelMapper();
        ClubDto clubDTO = mapper.map(clubSaved, ClubDto.class);

        return clubDTO;
    }

    public List<ClubDto> getAllClubs(){
        List<Club> clubes =clubRepository.findAll();
        ModelMapper mapper = new ModelMapper();
        List<ClubDto> clubesDTO = new ArrayList<ClubDto>();
        for(Club club: clubes){
            clubesDTO.add(mapper.map(club, ClubDto.class));
        }
        return clubesDTO;
    }

    public void deleteClub(Long id){

        clubRepository.deleteById(id);

    }

    public ClubDto findById(Long id){
        Optional<Club> clubOptional = clubRepository.findById(id);
        ModelMapper mapper = new ModelMapper();
        ClubDto clubDTO = null;
        if(clubOptional.isPresent()) {
            clubDTO = mapper.map(clubOptional.get(), ClubDto.class);
        }
        return clubDTO;
    }

    public List<ClubDto> getClubsRecommended(){
        List<Club> clubes =clubRepository.getClubRecommended();
        ModelMapper mapper = new ModelMapper();
        List<ClubDto> clubesDTO = new ArrayList<ClubDto>();
        for(Club club: clubes){
            clubesDTO.add(mapper.map(club, ClubDto.class));
        }
        return clubesDTO;
    }

    public List<ClubDto> getRandomClubs(){
        List<Club> clubes =clubRepository.getRandomClubs();
        ModelMapper mapper = new ModelMapper();
        List<ClubDto> clubesDTO = new ArrayList<ClubDto>();
        for(Club club: clubes){
            clubesDTO.add(mapper.map(club, ClubDto.class));
        }
        return clubesDTO;
    }
}
