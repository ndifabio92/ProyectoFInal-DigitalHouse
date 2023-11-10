package com.dh.canchas365.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.io.Serializable;
@Entity
@Table(name = "CharacteristicsClubes")
@Getter
@Setter
@NoArgsConstructor
public class CharacteristicsClubes implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String name;

    private String url;

    public CharacteristicsClubes(String id, String name, String url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }
}

    