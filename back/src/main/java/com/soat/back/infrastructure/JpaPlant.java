package com.soat.back.infrastructure;

import com.soat.back.domain.model.SunLevel;

import javax.persistence.*;

@Entity
@Table(name = "plant")
public class JpaPlant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String locations;

    @Column
    @Enumerated(EnumType.STRING)
    private SunLevel sunLevel;

    @Column
    private Integer gardeningLevel;

    @Column
    private boolean forbiddenForChildren;

    private boolean forbiddenForAnimals;

    @Column
    private Integer minTemperature;

    @Column
    private Integer maxTemperature;

    @Column
    private String allergies;


    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getLocations() {
        return locations;
    }

    public SunLevel getSunLevel() {
        return sunLevel;
    }

    public Integer getGardeningLevel() {
        return gardeningLevel;
    }

    public boolean isForbiddenForChildren() {
        return forbiddenForChildren;
    }

    public boolean isForbiddenForAnimals() {
        return forbiddenForAnimals;
    }

    public Integer getMinTemperature() {
        return minTemperature;
    }

    public Integer getMaxTemperature() {
        return maxTemperature;
    }

    public String getAllergies() {
        return allergies;
    }
}
