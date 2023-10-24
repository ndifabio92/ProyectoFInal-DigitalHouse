package com.dh.canchas365.repository;

import com.dh.canchas365.model.PlayingField;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayingFieldRepository extends JpaRepository<PlayingField, Long> {
}
