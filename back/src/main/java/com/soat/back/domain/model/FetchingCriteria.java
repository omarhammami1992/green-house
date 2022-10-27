package com.soat.back.domain.model;

public record FetchingCriteria(Location location,
                               SunLevel sunLevel,
                               Integer gardeningLevel,
                               boolean hasChildren,
                               boolean hasAnimals,
                               Integer minTemperature,
                               Integer maxTemperature,
                               Allergy allergy) {

}
