package de.neufische.mydepot.api;

import de.neufische.mydepot.model.PortfolioItem;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import yahoofinance.Stock;
import yahoofinance.quotes.stock.StockQuote;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
class PortfolioApiServiceTest {

    @MockBean
    private YahooFinanceService yahooFinanceService;

    @Autowired
    private PortfolioApiService portfolioApiService;

    @Test
    @DisplayName("Should update a given portfolio with one item")
    void updateAll() {
        //GIVEN

        PortfolioItem amazon = PortfolioItem.builder()
                .id("1")
                .displayName("Amazon")
                .symbol("AMZN")
                .quantity(3)
                .boughtAtPricePerShare(500)
                .build();

        List<PortfolioItem> all = List.of(amazon);

        String[] symbols = {"AMZN"};
        Stock stock1 = new Stock("AMZN");
        StockQuote stockQuote = new StockQuote("AMZN");
        stock1.setQuote(stockQuote);

        Map<String, Stock> stocks = new HashMap<>(Map.of("AMZN", stock1));

        when(yahooFinanceService.get(symbols)).thenReturn(stocks);
        when(yahooFinanceService.getRegularMarketPrice(stocks, amazon)).thenReturn(BigDecimal.valueOf(550));
        when(yahooFinanceService.getRegularMarketChangePercent(stocks, amazon)).thenReturn(BigDecimal.valueOf(10));
        when(yahooFinanceService.getDayLow(stocks, amazon)).thenReturn(BigDecimal.valueOf(2));
        when(yahooFinanceService.getDayHigh(stocks, amazon)).thenReturn(BigDecimal.valueOf(3));
        when(yahooFinanceService.getYearLow(stocks, amazon)).thenReturn(BigDecimal.valueOf(1));
        when(yahooFinanceService.getYearHigh(stocks, amazon)).thenReturn(BigDecimal.valueOf(10));
        when(yahooFinanceService.getDividend(stocks, amazon)).thenReturn(BigDecimal.valueOf(0));


        PortfolioItem amazonUpdated = PortfolioItem.builder()
                .id("1")
                .displayName("Amazon")
                .symbol("AMZN")
                .quantity(3)
                .boughtAtPricePerShare(500)
                .regularMarketPrice(BigDecimal.valueOf(550))
                .regularMarketChangePercent(BigDecimal.valueOf(10))
                .dayLow(BigDecimal.valueOf(2))
                .dayHigh(BigDecimal.valueOf(3))
                .yearLow(BigDecimal.ONE)
                .yearHigh(BigDecimal.valueOf(10))
                .dividend(BigDecimal.ZERO)

                .build();

        List<PortfolioItem> expected = List.of(amazonUpdated);

        //WHEN

        List<PortfolioItem> actual = portfolioApiService.updateAll(all);

        //THEN
        assertEquals(expected, actual);
    }
}