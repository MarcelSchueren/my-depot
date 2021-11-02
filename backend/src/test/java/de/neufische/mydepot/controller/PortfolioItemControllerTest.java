package de.neufische.mydepot.controller;

import de.neufische.mydepot.model.PortfolioItem;
import de.neufische.mydepot.repo.PortfolioItemRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PortfolioItemControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private PortfolioItemRepo portfolioItemRepo;

    @BeforeEach
    public void clearDb() {
        portfolioItemRepo.deleteAll();
    }

    @LocalServerPort
    private int port;

    @Test
    @DisplayName("Should return the newPortfolioItem with an id from db; checks also getItem()")
    void createPortfolioItem() {
        //GIVE
        PortfolioItem newPortfolioItem = PortfolioItem.builder()
                .displayName("Amazon")
                .symbol("AMZN")
                .quantity(3)
                .boughtAtPricePerShare(500)
                .build();
        //WHEN
        ResponseEntity<PortfolioItem> postResponse = restTemplate.postForEntity("/stocks", newPortfolioItem, PortfolioItem.class);
        PortfolioItem actual = postResponse.getBody();
        //THEN
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(actual);
        assertEquals(PortfolioItem.builder()
                .id(actual.getId())                     //Gets actual's id (from db, it is random)
                .displayName("Amazon")
                .symbol("AMZN")
                .quantity(3)
                .boughtAtPricePerShare(500)
                .build(), actual);

        // THEN: check via GET if element was created
        String actualId = actual.getId();
        ResponseEntity<PortfolioItem> getResponse = restTemplate.getForEntity("/stocks/" + actualId, PortfolioItem.class);
        PortfolioItem persistedPortfolioItem = getResponse.getBody();

        assertNotNull(persistedPortfolioItem);
        assertEquals(persistedPortfolioItem.getId(), actualId);
        assertEquals(newPortfolioItem.getDisplayName(), persistedPortfolioItem.getDisplayName());
        assertEquals(newPortfolioItem.getQuantity(), persistedPortfolioItem.getQuantity());
    }

    @Test
    @DisplayName("Should return the only two elements of the db")
    void getAllItems() {
        //GIVE
        PortfolioItem newPortfolioItem1 = PortfolioItem.builder()
                .displayName("Amazon")
                .symbol("AMZN")
                .quantity(3)
                .boughtAtPricePerShare(500)
                .build();

        PortfolioItem newPortfolioItem2 = PortfolioItem.builder()
                .displayName("Microsoft")
                .symbol("MSFT")
                .quantity(5)
                .boughtAtPricePerShare(100)
                .build();

        portfolioItemRepo.save(newPortfolioItem1);
        portfolioItemRepo.save(newPortfolioItem2);

        //WHEN (INCLUDES AN UPDATE OF STATS (PRICE & CHANGEPERCENT))
        ResponseEntity<PortfolioItem[]> response = restTemplate.getForEntity("/stocks", PortfolioItem[].class);

        //UPDATE STATS FROM ITEM IN MEMORY SO IT CAN MATCH WITH ALREADY UPDATED ITEM FROM DB
        newPortfolioItem1.setRegularMarketChangePercent(Objects.requireNonNull(response.getBody())[0].getRegularMarketChangePercent());
        newPortfolioItem1.setRegularMarketPrice(Objects.requireNonNull(response.getBody())[0].getRegularMarketPrice());
        newPortfolioItem2.setRegularMarketChangePercent(Objects.requireNonNull(response.getBody())[1].getRegularMarketChangePercent());
        newPortfolioItem2.setRegularMarketPrice(Objects.requireNonNull(response.getBody())[1].getRegularMarketPrice());

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                newPortfolioItem1, newPortfolioItem2));
    }
}