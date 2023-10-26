package com.dh.canchas365.model;

import com.dh.canchas365.model.images.Images;
import com.dh.canchas365.model.location.Adress;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45, nullable = false)
    private String name;

    @Column(length = 45, nullable = false)
    private String phone_number;

    private Boolean recommended;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "club")
    @JsonIgnore
    private Set<PlayingField> playingFields = new HashSet<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_adress", referencedColumnName = "id", nullable = false)
    private Adress adress;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "club")
    @JsonIgnore
    private Set<Images> images = new HashSet<>();
}
