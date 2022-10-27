package com.soat.back.domain.port;

import com.soat.back.domain.model.Plant;

import java.util.List;

public interface PlantPort {
    List<Plant> findAll();

}
