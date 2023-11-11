package com.dh.canchas365.repository;

import com.dh.canchas365.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {

    @Query("select c from Club c where c.recommended= 1")
    List<Club> getClubRecommended();

    @Query("select c from Club c where c.name= ?1")
    Optional<Club> findByName(String name);

    @Query(value = "select * from club ORDER BY RAND() LIMIT 10", nativeQuery = true)
    List<Club> getRandomClubs();

    @Query(value = "select * from club where id_category = :id", nativeQuery = true)
    Optional<Club> clubCategoryInUse(@Param("id") Long category);

    @Query(value = "select * from club where id_characteristic = :id", nativeQuery = true)
    Optional<Club> clubCaracteristicInUse(@Param("id") Long characteristic);
}
