package com.dh.canchas365.service.location;

import com.dh.canchas365.dto.location.AdressDTO;
import com.dh.canchas365.model.location.Adress;
import com.dh.canchas365.model.location.City;
import com.dh.canchas365.repository.location.AddressRepository;
import com.dh.canchas365.repository.location.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private CityRepository cityRepository;

    public Adress createAddress(AdressDTO dto){
        Adress adress = new Adress();
        adress.setStreet(dto.getStreet());
        adress.setNumber(dto.getNumber());
        adress.setFloor(dto.getFloor());
        adress.setApartment(dto.getApartment());
        Optional<City> optionalCity = cityRepository.findById(dto.getIdCity());
        if(optionalCity.isPresent()){
            adress.setCity(optionalCity.get());
        }

        return addressRepository.save(adress);
    }
}
