package com.dh.canchas365.repository.location;

import com.dh.canchas365.model.location.Adress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdressRepository extends JpaRepository<Adress,Long> {
    @Query(value = "select * from adress a where a.street= :street and a.number = :number and id_city= :idCity", nativeQuery = true)
    Optional<Adress> findByAdress(String street, Integer number, Long idCity);
}
