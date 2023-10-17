package com.dh.canchas365.repository;

import com.dh.canchas365.model.Usuario;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    Optional<Usuario> findByUsername(String username);

    //despues hacer una busqueda por rol
}
