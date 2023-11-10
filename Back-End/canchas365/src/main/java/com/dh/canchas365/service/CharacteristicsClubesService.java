package com.dh.canchas365.service;

import com.dh.canchas365.exceptions.CustomFieldException;
import com.dh.canchas365.model.CharacteristicsClubes;
import com.dh.canchas365.model.Club;
import com.dh.canchas365.repository.CharacteristicsRepository;
import com.dh.canchas365.repository.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacteristicsClubesService extends CustomFieldException {
    @Autowired
    private CharacteristicsRepository repository;

    @Autowired
    private ClubRepository clubRepository;

    public List<CharacteristicsClubes> getAll(){
        return repository.findAll();
    }
    public Characteristics create(Characteristics characteristics){
        return repository.save(characteristics);
    }

    public Characteristics update(Characteristics characteristics, String id){
        Optional<Characteristics> optional = findById(characteristics.getId());
        var characteristicsUpdate = optional.get(id);
        characteristcsUpdate.setName(characteristics.getName());
        characteristicsUpdate.setUrl(characteristics.getUrl());
        return repository.save(characteristicsUpdate);
    }

}
