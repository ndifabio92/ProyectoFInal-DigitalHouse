package com.dh.canchas365.service.auth;

import com.dh.canchas365.dto.auth.UsuarioDto;
import com.dh.canchas365.model.auth.Rol;
import com.dh.canchas365.model.auth.Usuario;
import com.dh.canchas365.model.emun.ERol;
import com.dh.canchas365.repository.auth.RolRepository;
import com.dh.canchas365.repository.auth.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private RolRepository rolRepository;

    public Usuario getByUsername(String username) {
        Optional<Usuario> usuario = repository.findByUsername(username);
        return usuario.get();
    }

    public List<UsuarioDto> getAll() {
        var result = repository.findAll();
        List<UsuarioDto> usuarioDtos = new ArrayList<>();

        result.forEach(usuario -> {
            UsuarioDto usuarioDto = new UsuarioDto();
            usuarioDto.setId(usuario.getId());
            usuarioDto.setUsername(usuario.getUsername());
            usuarioDto.setName(usuario.getName());
            usuarioDto.setLastname(usuario.getLastname());
            usuarioDto.setRol(usuario.getRoles());
            usuarioDto.setIsAdmin(usuario.getRoles().stream().anyMatch(rol -> rol.getName() == ERol.ADMIN));
            usuarioDtos.add(usuarioDto);
        });

        return usuarioDtos;
    }

    public UsuarioDto updateRoles(Long id) {
        var usuario = repository.findById(id).orElse(null);
        boolean isAdmin = usuario.getRoles().stream().anyMatch(rol -> rol.getName() == ERol.ADMIN);
        Set<Rol> roles = new HashSet<>(usuario.getRoles());
        UsuarioDto usuarioDto = new UsuarioDto();

        if (isAdmin) {
            roles.removeIf(rol -> rol.getName() == ERol.ADMIN);
            usuarioDto.setIsAdmin(false);
        } else {
            Rol rolAdmin = rolRepository.findByName(ERol.ADMIN);
            roles.add(rolAdmin);
            usuarioDto.setIsAdmin(true);
        }
        usuario.setRoles(roles);
        repository.save(usuario);

        usuarioDto.setId(usuario.getId());
        usuarioDto.setUsername(usuario.getUsername());
        usuarioDto.setName(usuario.getName());
        usuarioDto.setLastname(usuario.getLastname());
        usuarioDto.setRol(usuario.getRoles());

        return usuarioDto;
    }
}
