package com.dh.canchas365.service;

import com.dh.canchas365.dto.PlayingFieldDto;
import com.dh.canchas365.exceptions.ResourceNotFoundException;
import com.dh.canchas365.model.Category;
import com.dh.canchas365.model.Club;
import com.dh.canchas365.model.PlayingField;
import com.dh.canchas365.repository.ClubRepository;
import com.dh.canchas365.repository.PlayingFieldRepository;
import com.dh.canchas365.repository.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlayingFieldService {

    @Autowired
    private PlayingFieldRepository playingFieldRepository;

    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public PlayingFieldDto create(PlayingFieldDto dto) throws ResourceNotFoundException {
        PlayingField playingField = new PlayingField();
        playingField.setDescription(dto.getDescription());

        Optional<Club> optionalClub = clubRepository.findById(dto.getIdClub());
        if(optionalClub.isPresent()){
            playingField.setClub(optionalClub.get());
        }
        else{
            throw new ResourceNotFoundException("No existe un club con el id "+dto.getIdClub());
        }

        Optional<Category> optionalSport = categoryRepository.findById(dto.getCategory().getId());
        if(optionalSport.isPresent()){
            playingField.setCategory(optionalSport.get());
        }
        else{
            throw new ResourceNotFoundException("No existe un deporte con el id "+dto.getCategory().getId());
        }
        ModelMapper mapper = new ModelMapper();
        return mapper.map(playingFieldRepository.save(playingField), PlayingFieldDto.class);
    }

    public PlayingField updatePlayingField(PlayingField playingField){
        return playingFieldRepository.save(playingField);
    }

    public List<PlayingFieldDto> getAllPlayingFields(){
        List<PlayingField> playingFields =  playingFieldRepository.findAll();
        ModelMapper mapper = new ModelMapper();
        List<PlayingFieldDto> playingFieldDtos = new ArrayList<PlayingFieldDto>();
        for(PlayingField pf: playingFields){
            playingFieldDtos.add(mapper.map(pf, PlayingFieldDto.class));
        }
        return playingFieldDtos;

    }

    public void deletePlayingField(Long id){
        playingFieldRepository.deleteById(id);
    }

    public PlayingFieldDto findById(Long id){
        Optional<PlayingField> playingFieldOptional = playingFieldRepository.findById(id);
        ModelMapper mapper = new ModelMapper();
        PlayingFieldDto playingFieldDTO = null;
        if(playingFieldOptional.isPresent()){
            playingFieldDTO = mapper.map(playingFieldOptional.get(), PlayingFieldDto.class);
        }
        return playingFieldDTO;
    }

    public List<PlayingFieldDto> getPlayingFieldByClub(Long idClub){
        List<PlayingField> playingFields =  playingFieldRepository.getPlayingFieldsByClub(idClub);
        ModelMapper mapper = new ModelMapper();
        List<PlayingFieldDto> playingFieldDtos = new ArrayList<PlayingFieldDto>();
        for(PlayingField pf: playingFields){
            playingFieldDtos.add(mapper.map(pf, PlayingFieldDto.class));
        }
        return playingFieldDtos;
    }
}
