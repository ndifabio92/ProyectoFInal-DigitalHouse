package com.dh.canchas365.model;

import com.dh.canchas365.model.images.Images;
import com.dh.canchas365.model.location.Adress;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Club implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45, nullable = false)
    private String name;

    @Column(length = 45, nullable = false)
    private String phone_number;

    private Boolean recommended;

    @OneToMany(mappedBy = "club", cascade = CascadeType.ALL, orphanRemoval = true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Set<PlayingField> playingFields = new HashSet<>();

    @OneToOne(cascade = CascadeType.ALL)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "id_adress", referencedColumnName = "id", nullable = false)
    private Adress adress;

    @OneToMany( cascade = CascadeType.ALL, mappedBy = "club", orphanRemoval = true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Images> images = new HashSet<>();

}
