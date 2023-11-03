package com.dh.canchas365.service;

import com.dh.canchas365.dto.ClubCreateDTO;
import com.dh.canchas365.dto.ClubDTO;
import com.dh.canchas365.dto.images.ImageDTO;
import com.dh.canchas365.exceptions.ResourceDuplicateException;
import com.dh.canchas365.model.Category;
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

    @Autowired
    private CategoryService categoryService;

    @Transactional
    public Club createClub(ClubCreateDTO dto) throws ResourceDuplicateException {
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

        Optional<Category> optionalCategory = categoryService.findById(dto.getId_category());
        if(optionalCategory.isEmpty()) {
            try {
                throw new Exception("El id Category no existe");
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        clubToSave.setCategory(optionalCategory.get());

        Club clubSaved = clubRepository.save(clubToSave);

        List<Images> imagesTosave = new ArrayList<>();
        for(ImageDTO imgDto: dto.getImages()){
            Images imageToSave = new Images();
            imageToSave.setUrl(imgDto.getUrl());
            imageToSave.setClub(clubSaved);
            imagesTosave.add(imageToSave);
        }

        imagesRepository.saveAll(imagesTosave);

        return clubSaved;
    }
    @Transactional
    public ClubDTO updateClub(Club club){

        Optional<Category> category = categoryService.findById(club.getCategory().getId());
        club.setCategory(category.get());
        Club clubSaved = clubRepository.save(club);

        ModelMapper mapper = new ModelMapper();
        ClubDTO clubDTO = mapper.map(clubSaved, ClubDTO.class);

        return clubDTO;
    }

    public List<ClubDTO> getAllClubs(){
        List<Club> clubes =clubRepository.findAll();
        ModelMapper mapper = new ModelMapper();
        List<ClubDTO> clubesDTO = new ArrayList<ClubDTO>();
        for(Club club: clubes){
            clubesDTO.add(mapper.map(club, ClubDTO.class));
        }
        return clubesDTO;
    }

    public void deleteClub(Long id){

        clubRepository.deleteById(id);

    }

    public ClubDTO findById(Long id){
        Optional<Club> clubOptional = clubRepository.findById(id);
        ModelMapper mapper = new ModelMapper();
        ClubDTO clubDTO = null;
        if(clubOptional.isPresent()) {
            clubDTO = mapper.map(clubOptional.get(), ClubDTO.class);
        }
        return clubDTO;
    }

    public List<ClubDTO> getClubsRecommended(){
        List<Club> clubes =clubRepository.getClubRecommended();
        ModelMapper mapper = new ModelMapper();
        List<ClubDTO> clubesDTO = new ArrayList<ClubDTO>();
        for(Club club: clubes){
            clubesDTO.add(mapper.map(club, ClubDTO.class));
        }
        return clubesDTO;
    }

    public List<ClubDTO> getRandomClubs(){
        List<Club> clubes =clubRepository.getRandomClubs();
        ModelMapper mapper = new ModelMapper();
        List<ClubDTO> clubesDTO = new ArrayList<ClubDTO>();
        for(Club club: clubes){
            clubesDTO.add(mapper.map(club, ClubDTO.class));
        }
        return clubesDTO;
    }
}
