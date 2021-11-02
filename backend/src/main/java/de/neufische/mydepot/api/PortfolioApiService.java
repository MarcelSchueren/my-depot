package de.neufische.mydepot.api;

import de.neufische.mydepot.model.PortfolioItem;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import yahoofinance.Stock;

import java.math.BigDecimal;
import java.util.ArrayList;

import java.util.List;
import java.util.Map;

@Log4j2
@Service
public class PortfolioApiService {

    private final YahooFinanceService yahooFinanceService;

    public PortfolioApiService(YahooFinanceService yahooFinanceService) {
        this.yahooFinanceService = yahooFinanceService;
    }

    public List<PortfolioItem> updateAll(List<PortfolioItem> all) {
        Map<String, Stock> stocks;
        String[] symbols = getSymbolsForUpdate(all);
        stocks = yahooFinanceService.get(symbols); // single request, MIT-Lizenz
        return mapStocksToPortfolioItem(stocks, all);
    }

    private List<PortfolioItem> mapStocksToPortfolioItem(Map<String, Stock> stocks, List<PortfolioItem> all) {
        for (PortfolioItem portfolioItem : all) {
            BigDecimal regularMarketPrice = yahooFinanceService.getRegularMarketPrice(stocks, portfolioItem);
            BigDecimal regularMarketChangePercent = yahooFinanceService.getRegularMarketChangePercent(stocks, portfolioItem);
            portfolioItem.setRegularMarketPrice(regularMarketPrice);
            portfolioItem.setRegularMarketChangePercent(regularMarketChangePercent);
        }
        return all;
    }

    private String[] getSymbolsForUpdate(List<PortfolioItem> all) {
        List<String> symbols = new ArrayList<>();
        for (PortfolioItem portfolioItem : all) {
            symbols.add(portfolioItem.getSymbol());
        }
        return symbols.toArray(new String[0]);
    }
}