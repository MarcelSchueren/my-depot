package de.neufische.mydepot.controller;

import de.neufische.mydepot.model.Portfolio;
import de.neufische.mydepot.model.PortfolioItem;
import de.neufische.mydepot.repo.PortfolioRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.math.BigDecimal;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PortfolioControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private PortfolioRepo portfolioRepo;

    @BeforeEach
    public void clearDb() {
        portfolioRepo.deleteAll();
    }

    @Test
    @DisplayName("Should return the newPortfolio with an id from db")
    void createPortfolio() {
        //GIVE
        PortfolioItem newPortfolioItem = PortfolioItem.builder()
                .id("1")
                .displayName("Amazon")
                .symbol("AMZN")
                .quantity(3)
                .boughtAtPricePerShare(500)
                .build();

        Portfolio newPortfolio = Portfolio.builder()
                .name("TestPortfolio")
                .portfolioItems(List.of(newPortfolioItem))
                .build();

        //WHEN
        ResponseEntity<Portfolio> postResponse = restTemplate.postForEntity("/portfolios", newPortfolio, Portfolio.class);
        Portfolio actual = postResponse.getBody();
        //THEN
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(actual);
        assertEquals(new Portfolio(actual.getId(), "TestPortfolio", List.of(newPortfolioItem)), actual);
    }

    @Test
    @DisplayName("Should return the Portfolio with specific id -via get- and updated price / changePercent of PortfolioItem")
    void getPortfolio() {
        //GIVE
        PortfolioItem newPortfolioItem = PortfolioItem.builder()
                .id("1")
                .displayName("Amazon")
                .symbol("AMZN")
                .quantity(3)
                .boughtAtPricePerShare(500)
                .regularMarketPrice(BigDecimal.valueOf(1000000))        //non-realistic value; we will check if they will change
                .regularMarketChangePercent(BigDecimal.valueOf(100))    //non-realistic value; we will check if they will change
                .build();

        Portfolio newPortfolio = Portfolio.builder()
                .name("TestPortfolio")
                .portfolioItems(List.of(newPortfolioItem))
                .build();

        ResponseEntity<Portfolio> postResponse = restTemplate.postForEntity("/portfolios", newPortfolio, Portfolio.class);
        Portfolio actual = postResponse.getBody();
        assert actual != null;
        String actualId = actual.getId();

        //WHEN
        ResponseEntity<Portfolio> getResponse = restTemplate.getForEntity("/portfolios/" + actualId, Portfolio.class);
        Portfolio persistedPortfolio = getResponse.getBody();

        //THEN
        assertNotNull(persistedPortfolio);
        assertEquals(persistedPortfolio.getId(), actualId);
        assertEquals(newPortfolio.getName(), persistedPortfolio.getName());

        assertEquals(newPortfolio.getPortfolioItems().get(0).getDisplayName(), persistedPortfolio.getPortfolioItems().get(0).getDisplayName() );
        assertEquals(newPortfolio.getPortfolioItems().get(0).getBoughtAtPricePerShare(), persistedPortfolio.getPortfolioItems().get(0).getBoughtAtPricePerShare() );
        assertNotEquals(newPortfolio.getPortfolioItems().get(0).getRegularMarketChangePercent(), persistedPortfolio.getPortfolioItems().get(0).getRegularMarketChangePercent() );
        assertNotEquals(newPortfolio.getPortfolioItems().get(0).getRegularMarketPrice(), persistedPortfolio.getPortfolioItems().get(0).getRegularMarketPrice() );
    }


    @Test
    @DisplayName("Should return the two persisted portfolios of the db")
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

        Portfolio portfolio1 = Portfolio.builder()
                .id("1")
                .name("Portfolio1")
                .portfolioItems(List.of(newPortfolioItem1, newPortfolioItem2))
                .build();

        Portfolio portfolio2 = Portfolio.builder()
                .id("2")
                .name("Portfolio2")
                .portfolioItems(List.of(newPortfolioItem1, newPortfolioItem2))
                .build();

        portfolioRepo.save(portfolio1);
        portfolioRepo.save(portfolio2);

        //WHEN
        ResponseEntity<Portfolio[]> response = restTemplate.getForEntity("/portfolios", Portfolio[].class);
        Portfolio [] expected = new Portfolio[]{portfolio1, portfolio2};

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertArrayEquals(response.getBody(), expected);
    }
}