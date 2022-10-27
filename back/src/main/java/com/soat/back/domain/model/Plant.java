package com.soat.back.domain.model;

import java.util.List;

public record Plant(String name,
                    String description,
                    List<Location> locations,
                    SunLevel sunLevel,
                    Integer gardeningLevel,
                    boolean forbiddenForChildren,
                    boolean forbiddenForAnimals,
                    Temperature temperature,
                    String image,
                    Integer size) {
}
