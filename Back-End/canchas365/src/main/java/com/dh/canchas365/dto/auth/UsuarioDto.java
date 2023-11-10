package com.dh.canchas365.dto.auth;

import com.dh.canchas365.model.auth.Rol;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UsuarioDto {

    private Long id;

    private String username;

    private String name;

    private String lastname;

    private Set<Rol> rol;

}
