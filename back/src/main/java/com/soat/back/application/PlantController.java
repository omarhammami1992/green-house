package com.soat.back.application;

import com.soat.back.domain.use_case.FetchPlant;
import com.soat.back.domain.model.FetchingCriteria;
import com.soat.back.domain.model.Plant;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plant")
public class PlantController {

    private final FetchPlant fetchPlant;

    public PlantController(FetchPlant fetchPlant) {
        this.fetchPlant = fetchPlant;

    }

    @PostMapping("/fetch")
    @CrossOrigin(origins = "http://localhost:3000" )
    public List<PlantJson> fetchByCriteria(@RequestBody FetchingCriteria fetchingCriteria){
        final List<Plant> plants = fetchPlant.execute(fetchingCriteria);
        return plants.stream()
                .map(PlantController::convertToPlantJson)
                .toList();

    }

    private static PlantJson convertToPlantJson(Plant plant) {
        return new PlantJson(plant.name(), plant.description(), plant.image());
    }
}
