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

//    @MockBean
//    private YahooFinanceService yahooFinanceService;
//
//    @Autowired
//    private PortfolioApiService portfolioApiService;
//
//    @Test
//    @DisplayName("Should update a given portfolio with one item")
//    void updateAll() {
//        //GIVEN
//
//        PortfolioItem amazon = new PortfolioItem(
//                "1"
//                , "Amazon"
//                , "AMZN"
//                , 3
//                , 500
//                , BigDecimal.valueOf(1)
//                , BigDecimal.valueOf(0));
//
//        List<PortfolioItem> all = List.of(amazon);
//
//        String[] symbols = {"AMZN"};
//        Stock stock1 = new Stock("AMZN");
//        StockQuote stockQuote = new StockQuote("AMZN");
//        stock1.setQuote(stockQuote);
//
//        Map<String, Stock> stocks = new HashMap<>(Map.of("AMZN", stock1));
//
//        when(yahooFinanceService.get(symbols)).thenReturn(stocks);
//        when(yahooFinanceService.getRegularMarketPrice(stocks, amazon)).thenReturn(BigDecimal.valueOf(550));
//        when(yahooFinanceService.getRegularMarketChangePercent(stocks, amazon)).thenReturn(BigDecimal.valueOf(10));
//
//        PortfolioItem amazonUpdated = new PortfolioItem(
//                "1"
//                , "Amazon"
//                , "AMZN"
//                , 3
//                , 500
//                , BigDecimal.valueOf(550)
//                , BigDecimal.valueOf(10));
//
//        List<PortfolioItem> expected = List.of(amazonUpdated);
//
//        //WHEN
//
//        List<PortfolioItem> actual = portfolioApiService.updateAll(all);
//
//        //THEN
//        assertEquals(expected, actual);
//    }
}