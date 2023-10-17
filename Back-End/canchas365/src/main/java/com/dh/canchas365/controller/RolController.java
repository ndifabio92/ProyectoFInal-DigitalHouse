package com.dh.canchas365.controller;

import com.dh.canchas365.dto.RolDTO;
import com.dh.canchas365.model.ERol;
import com.dh.canchas365.model.Rol;
import com.dh.canchas365.repository.RolRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rol")
public class RolController {

    @Autowired
    private RolRepository rolRepository;

    @PostMapping("/create")
    public ResponseEntity<?> crearRol(@Valid @RequestBody RolDTO rolDTO){

        Rol rol = Rol.builder().name(ERol.valueOf(rolDTO.getName())).build();

        rolRepository.save(rol);

        /*Usuario usuario = Usuario.builder()
                .username(crearUsuarioDTO.getUsername())
                .email(crearUsuarioDTO.getEmail())
                .password(passwordEncoder.encode(crearUsuarioDTO.getPassword()))
                //.operador(operadorService.getOperadorById(crearUsuarioDTO.getOperador()))
                .roles(roles)
                .build();

        usuarioRepository.save(usuario);*/

        return ResponseEntity.ok(rol);
    }

}
