package com.dh.canchas365.controller.location;

import com.dh.canchas365.dto.location.AdressDTO;
import com.dh.canchas365.model.location.Adress;
import com.dh.canchas365.service.location.AdressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/adress")
public class AdressController {

    @Autowired
    private AdressService adressService;

    @PostMapping
    public ResponseEntity<Adress> createAdress(@RequestBody AdressDTO dto){
        return new ResponseEntity<Adress>(adressService.createAddress(dto), HttpStatus.CREATED);
    }
}
