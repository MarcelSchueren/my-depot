package de.neufische.mydepot.api;

import de.neufische.mydepot.model.PortfolioItem;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import yahoofinance.Stock;

import java.math.BigDecimal;
import java.util.NoSuchElementException;
import java.util.UUID;

@Log4j2
@Service
public class PortfolioItemApiService {

    private final YahooFinanceService yahooFinanceService;

    @Autowired
    public PortfolioItemApiService(YahooFinanceService yahooFinanceService) {
        this.yahooFinanceService = yahooFinanceService;
    }

    public PortfolioItem getPortfolioItemBySymbol(String symbol) {
        Stock portfolioItemBySymbol = yahooFinanceService.getPortfolioItemBySymbol(symbol);

        if (portfolioItemBySymbol==null){
            throw new NoSuchElementException("Symbol is not valid: " + symbol);
        }

        return PortfolioItem.builder()
                .id(generateUUID())
                .symbol(symbol)
                .displayName(yahooFinanceService.getDisplayName(portfolioItemBySymbol))
                .regularMarketPrice(yahooFinanceService.getRegularMarketPrice(portfolioItemBySymbol))
                .dayHigh(BigDecimal.ONE)
                .dayLow(BigDecimal.ONE)
                .yearHigh(BigDecimal.ONE)
                .yearLow(BigDecimal.ONE)
                .dividend(BigDecimal.ONE)
                .build();
    }

    private String generateUUID() {
        return UUID.randomUUID().toString();
    }
}
