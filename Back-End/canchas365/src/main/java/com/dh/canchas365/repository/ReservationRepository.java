package com.dh.canchas365.repository;

import com.dh.canchas365.model.Reservation;
import org.apache.commons.codec.language.bm.Lang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, Lang> {
    @Query(value = "SELECT * FROM reservation r " +
            "WHERE :datetime = r.start_datetime OR (:datetime > r.start_datetime AND :datetime < r.end_datetime)",
            nativeQuery = true)
    Optional<List<Reservation>> findByDateTime(@Param("datetime") LocalDateTime dateTime);

}
