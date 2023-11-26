package com.dh.canchas365.controller;

import com.dh.canchas365.dto.ReservationDto;
import com.dh.canchas365.dto.SearchReservationDTO;
import com.dh.canchas365.model.Reservation;
import com.dh.canchas365.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping
    public List<ReservationDto> searchReservationByDateAndClub(@RequestBody SearchReservationDTO searchReservationDTO){
        return reservationService.searchReservationByClub(searchReservationDTO);
    }

}
