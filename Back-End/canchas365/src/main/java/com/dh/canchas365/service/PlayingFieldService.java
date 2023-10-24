package com.dh.canchas365.service;

import com.dh.canchas365.dto.PlayingFieldDTO;
import com.dh.canchas365.model.Club;
import com.dh.canchas365.model.PlayingField;
import com.dh.canchas365.model.Sport;
import com.dh.canchas365.repository.ClubRepository;
import com.dh.canchas365.repository.PlayingFieldRepository;
import com.dh.canchas365.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayingFieldService {

    @Autowired
    private PlayingFieldRepository playingFieldRepository;

    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private SportRepository sportRepository;

    public PlayingField createPlayingField(PlayingField playingField){
        return playingFieldRepository.save(playingField);
    }

    public PlayingField create(PlayingFieldDTO dto){
        PlayingField playingField = new PlayingField();
        playingField.setDescription(dto.getDescription());

        Optional<Club> optionalClub = clubRepository.findById(dto.getIdClub());
        if(optionalClub.isPresent()){
            playingField.setClub(optionalClub.get());
        }

        Optional<Sport> optionalSport = sportRepository.findById(dto.getIdSport());
        if(optionalSport.isPresent()){
            playingField.setSport(optionalSport.get());
        }
        return playingFieldRepository.save(playingField);
    }

    public PlayingField updatePlayingField(PlayingField playingField){
        return playingFieldRepository.save(playingField);
    }

    public List<PlayingField> getAllPlayingFields(){
        return playingFieldRepository.findAll();
    }

    public void deletePlayingField(Long id){
        playingFieldRepository.deleteById(id);
    }

    public PlayingField findById(Long id){
        Optional<PlayingField> playingFieldOptional = playingFieldRepository.findById(id);
        PlayingField playingField = null;
        if(playingFieldOptional.isPresent()){
            playingField = playingFieldOptional.get();
        }
        return playingField;
    }
}
