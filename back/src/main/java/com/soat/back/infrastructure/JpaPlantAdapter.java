package com.soat.back.infrastructure;

import com.soat.back.domain.port.PlantPort;
import com.soat.back.domain.model.Allergy;
import com.soat.back.domain.model.Location;
import com.soat.back.domain.model.Plant;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public class JpaPlantAdapter implements PlantPort {
    private static final String SEPARATOR = "-";
    private final JpaPlantRepository jpaPlantRepository;

    public JpaPlantAdapter(JpaPlantRepository jpaPlantRepository) {
        this.jpaPlantRepository = jpaPlantRepository;
    }

    @Override
    public List<Plant> findAll() {
        final List<JpaPlant> jpaPlants = jpaPlantRepository.findAll();
        return jpaPlants.stream()
                .map(JpaPlantAdapter::convertToPlant)
                .toList();
    }

    private static Plant convertToPlant(JpaPlant jpaPlant) {
        List<Location> locations = buildLocations(jpaPlant);
        List<Allergy> allergies = buildAllergies(jpaPlant);
        return new Plant(
                jpaPlant.getName(),
                jpaPlant.getDescription(),
                locations,
                jpaPlant.getSunLevel(),
                jpaPlant.getGardeningLevel(),
                jpaPlant.isForbiddenForChildren(),
                jpaPlant.isForbiddenForAnimals(),
                jpaPlant.getMinTemperature(),
                jpaPlant.getMaxTemperature(),
                allergies
        );
    }

    private static List<Location> buildLocations(JpaPlant jpaPlant) {
        return Arrays.stream(jpaPlant.getLocations().split(SEPARATOR)).map(Location::valueOf).toList();
    }

    private static List<Allergy> buildAllergies(JpaPlant jpaPlant) {
        return Arrays.stream(jpaPlant.getAllergies().split(SEPARATOR))
                .map(name -> !name.equals("") ? Allergy.valueOf(name) : null)
                .toList();
    }
}
