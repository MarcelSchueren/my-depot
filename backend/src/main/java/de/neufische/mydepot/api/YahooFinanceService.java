package de.neufische.mydepot.api;

import de.neufische.mydepot.model.PortfolioItem;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.Map;

@Log4j2
@Service
public class YahooFinanceService {

    public Map<String, Stock> get(String[] symbols) {
        try {
            return YahooFinance.get(symbols);
        } catch (IOException e) {
            log.error("Error in YahooFinanceService: updateAll", e);
        }
        return Collections.emptyMap();
    }

    public BigDecimal getRegularMarketPrice(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        return stocks.get(portfolioItem.getSymbol()).getQuote().getPrice();
    }

    public BigDecimal getRegularMarketChangePercent(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
          return stocks.get(portfolioItem.getSymbol()).getQuote().getChangeInPercent();
    }
}
