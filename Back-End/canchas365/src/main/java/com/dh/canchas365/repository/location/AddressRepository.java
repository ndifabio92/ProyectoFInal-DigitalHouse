package com.dh.canchas365.repository.location;

import com.dh.canchas365.model.location.Adress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Adress,Long> {
}
