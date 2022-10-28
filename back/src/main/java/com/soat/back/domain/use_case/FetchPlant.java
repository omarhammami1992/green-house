package com.soat.back.domain.use_case;

import com.soat.back.domain.model.FetchingCriteria;
import com.soat.back.domain.model.Plant;
import com.soat.back.domain.port.PlantPort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FetchPlant {
    private final PlantPort plantPort;

    public FetchPlant(PlantPort plantPort) {
        this.plantPort = plantPort;
    }

    public List<Plant> execute(FetchingCriteria fetchingCriteria) {
        final List<Plant> plants = plantPort.findAll();
        return plants.stream()
                .filter(plant -> plant.locations().contains(fetchingCriteria.location()))
                .filter(plant -> plant.sunLevel() == fetchingCriteria.sunLevel())
                .filter(plant -> plant.gardeningLevel() <= fetchingCriteria.gardeningLevel())
                .filter(plant -> plant.forbiddenForChildren() != fetchingCriteria.hasChildren())
                .filter(plant -> plant.forbiddenForAnimals() != fetchingCriteria.hasAnimals())
                .filter(plant -> plant.temperature() == fetchingCriteria.temperature())
                .filter(plant -> plant.size() <= fetchingCriteria.size())
                .toList();
    }
}
