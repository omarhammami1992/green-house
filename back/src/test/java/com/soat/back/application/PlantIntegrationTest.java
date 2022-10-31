package com.soat.back.application;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.soat.back.domain.model.Location;
import com.soat.back.domain.model.SunLevel;
import com.soat.back.domain.model.Temperature;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest()
@AutoConfigureMockMvc
@TestPropertySource(
        locations = "classpath:application.properties")
public class PlantIntegrationTest {
    @Autowired
    private PlantController plantController;

    @Autowired
    private MockMvc mockMvc;


    @Test
    @Sql(scripts = "classpath:db/V1_FETCH_BY_CRITERIA.sql")
    public void fetchByCriteria() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        this.mockMvc.perform(post("/plant/fetch")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new FetchingCriteria(Location.GARDEN,
                        SunLevel.PARTIAL_SHADE, 1, false, true, Temperature.COLD, 1)))
                .andExpect(status().isCreated()));
       // List<PlantJson>  plantJsons = plantController.fetchByCriteria(fetchingCriteria);
        Assert.assertEquals(result.size(), 1);
    }

}
