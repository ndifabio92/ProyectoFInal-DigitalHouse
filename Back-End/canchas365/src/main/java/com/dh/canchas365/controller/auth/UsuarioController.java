package com.dh.canchas365.controller.auth;

import com.dh.canchas365.dto.auth.CrearUsuarioDTO;
import com.dh.canchas365.dto.auth.LoginAttemp;
import com.dh.canchas365.dto.auth.UsuarioDTO;
import com.dh.canchas365.model.emun.ERol;
import com.dh.canchas365.model.auth.Rol;
import com.dh.canchas365.model.auth.Usuario;
import com.dh.canchas365.repository.auth.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/hello")
    public String hello(){
        return "Hello world sin seguridad";
    }

    @GetMapping("/helloSecured")
    public String helloSecured(){
        return "Hello world SEGURO";
    }

    @PostMapping("/crear")
    public ResponseEntity<?> crearUsuario(@Valid @RequestBody CrearUsuarioDTO crearUsuarioDto){

        Set<Rol> roles = crearUsuarioDto.getRoles().stream()
                .map(role -> Rol.builder().name(ERol.valueOf(role)).build())
                .collect(Collectors.toSet());

        Usuario usuario = Usuario.builder()
                .username(crearUsuarioDto.getUsername())
                .email(crearUsuarioDto.getEmail())
                .password(passwordEncoder.encode(crearUsuarioDto.getPassword()))
                //.operador(operadorService.getOperadorById(crearUsuarioDto.getOperador()))
                .roles(roles)
                .build();

        usuarioRepository.save(usuario);

        return ResponseEntity.ok(usuario);
    }

    @DeleteMapping
    public String borrarUsuario(@RequestParam Long id){
        usuarioRepository.deleteById(id);
        return "se borro el usuario con id "+id;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<?> getUsuario(@RequestBody LoginAttemp loginAttemp){
        Optional optional = usuarioRepository.findByUsername(loginAttemp.getUsername());
        Usuario usuario = null;
        UsuarioDTO usuarioDto = null;
        if(!optional.isEmpty()){
            usuario = (Usuario) optional.get();
            usuarioDto = new UsuarioDTO();
            usuarioDto.setId(usuario.getId());
            usuarioDto.setEmail(usuario.getEmail());
            //usuarioDto.setOperador(usuario.getOperador());
            usuarioDto.setUsername(usuario.getUsername());
            return ResponseEntity.ok(usuarioDto);
        }

        return new ResponseEntity<>("No existe usuario con el username "+loginAttemp.getUsername(), HttpStatus.BAD_REQUEST);
    }
}
