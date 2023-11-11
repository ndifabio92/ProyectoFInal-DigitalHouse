package com.dh.canchas365.repository;

import com.dh.canchas365.model.Characteristics;
import com.dh.canchas365.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CharacteristicsRepository extends JpaRepository<Characteristics, Long> {
}

