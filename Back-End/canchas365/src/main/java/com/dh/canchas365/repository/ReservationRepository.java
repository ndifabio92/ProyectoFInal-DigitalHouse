package com.dh.canchas365.repository;

import com.dh.canchas365.model.PlayingField;
import com.dh.canchas365.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    @Query(value = "SELECT * FROM reservation r " +
            "WHERE :datetime = r.start_datetime OR (:datetime > r.start_datetime AND :datetime < r.end_datetime)",
            nativeQuery = true)
    Optional<List<Reservation>> findByDateTime(@Param("datetime") LocalDateTime dateTime);

    @Query(value = "SELECT r FROM Reservation r " +
            "WHERE startDatetime > ?1 AND endDatetime < ?2 AND playingField = ?3")
    Optional<List<Reservation>> findByDateTimeAndClub(LocalDateTime dateFrom,
                                                      LocalDateTime dateTo,
                                                      PlayingField playingField);

}
