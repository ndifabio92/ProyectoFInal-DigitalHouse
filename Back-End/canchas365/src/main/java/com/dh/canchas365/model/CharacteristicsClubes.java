package com.dh.canchas365.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.io.Serializable;
@Entity
@Table(name = "Characteristics")
@Getter
@Setter
@NoArgsConstructor
public class CharacteristicsClubes implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 45, nullable = false, unique = true)
    private String name;
    @Column(length = 255, nullable = false)
    private String url;
}

    