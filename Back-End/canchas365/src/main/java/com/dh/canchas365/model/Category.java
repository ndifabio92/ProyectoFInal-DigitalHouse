package com.dh.canchas365.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.io.Serializable;
@Entity
@Table(name = "Category")
@Getter
@Setter
@NoArgsConstructor
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45, nullable = false, unique = true)
    @NotEmpty(message = "El titulo es obligatorio")
    private String title;

    @Column(length = 255, nullable = false)
    @NotEmpty(message = "la description es obligatoria")
    private String description;

    @Column(length = 255, nullable = false)
    private String url;
}
