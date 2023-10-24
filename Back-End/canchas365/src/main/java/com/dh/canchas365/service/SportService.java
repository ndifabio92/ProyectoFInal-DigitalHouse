package com.dh.canchas365.service;

import com.dh.canchas365.model.Sport;
import com.dh.canchas365.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SportService {
    
    @Autowired
    private SportRepository sportRepository;

    public Sport createSport(Sport sport){
        return sportRepository.save(sport);
    }

    public Sport updateSport(Sport sport){
        return sportRepository.save(sport);
    }

    public List<Sport> getAllSports(){
        return sportRepository.findAll();
    }

    public void deleteSport(Long id){
        sportRepository.deleteById(id);
    }

    public Sport findById(Long id){
        Optional<Sport> sportOptional = sportRepository.findById(id);
        Sport sport = null;
        if(sportOptional.isPresent()){
            sport = sportOptional.get();
        }
        return sport;
    }
}
