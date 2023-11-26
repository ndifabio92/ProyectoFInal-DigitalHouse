package com.dh.canchas365.service;

import com.dh.canchas365.dto.PlayingFieldDTO;
import com.dh.canchas365.dto.ReservationDto;
import com.dh.canchas365.dto.SearchReservationDTO;
import com.dh.canchas365.model.PlayingField;
import com.dh.canchas365.model.Reservation;
import com.dh.canchas365.repository.PlayingFieldRepository;
import com.dh.canchas365.repository.ReservationRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private PlayingFieldRepository playingFieldRepository;

    public List<ReservationDto> searchReservationByClub(SearchReservationDTO searchReservationDTO){
        List<Reservation> reservations = new ArrayList<>();

        List<PlayingField> playingFieldsByClub = playingFieldRepository.getPlayingFieldsByClub(searchReservationDTO.getIdClub());
        for(PlayingField playingField: playingFieldsByClub){
            Optional<List<Reservation>> optionalReservations = reservationRepository.findByDateTimeAndClub(searchReservationDTO.getDateFrom(),
                    searchReservationDTO.getDateTo(), playingField);
            List<Reservation> reservationList = new ArrayList<>();
            if(optionalReservations.isPresent()){
                reservationList = optionalReservations.get();
            }

            for(Reservation reservation: reservationList){
                reservations.add(reservation);
            }

        }
        ModelMapper mapper = new ModelMapper();
        List<ReservationDto> reservationDtos = new ArrayList<ReservationDto>();
        for(Reservation rs: reservations){
            reservationDtos.add(mapper.map(rs, ReservationDto.class));
        }

        return reservationDtos;
    }
}
