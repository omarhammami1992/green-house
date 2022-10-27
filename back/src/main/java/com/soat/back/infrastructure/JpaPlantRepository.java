package com.soat.back.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaPlantRepository extends JpaRepository<JpaPlant, Integer> {
}
