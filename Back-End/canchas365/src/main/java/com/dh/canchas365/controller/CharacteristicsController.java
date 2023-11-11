package com.dh.canchas365.controller;

import com.dh.canchas365.exceptions.CustomFieldException;
import com.dh.canchas365.exceptions.ResourceNotFoundException;
import com.dh.canchas365.model.CharacteristicsClubes;
import com.dh.canchas365.service.CharacteristicsClubesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/characteristics")
public class CharacteristicsController extends CustomFieldException {

    @Autowired
    private CharacteristicsClubesService service;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Characteristics characteristics , BindingResult bindingResult){
        try{
            if(bindingResult.hasErrors()) {
                return validate(bindingResult);
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(service.create(characteristics));
        } catch (Exception ex) {
            return customResponseError(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<Characteristics> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id){
        try {
            Optional<CharacteristicsClubes> optional = service.findById(id);
            if (optional.isPresent()) {
                return ResponseEntity.ok(optional.get());
            }
        }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody Characteristics characteristics, @PathVariable Long id, BindingResult bindingResult){
        try {
            if(bindingResult.hasErrors()) {
                return validate(bindingResult);
            }
            Optional<Characteristics> optional = service.findById(id);
            if(optional.isPresent()) {
                return ResponseEntity.status(HttpStatus.OK).body(service.update(characteristics,id));
        }
    }
}
