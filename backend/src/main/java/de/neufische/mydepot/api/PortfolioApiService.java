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

    public List<PortfolioItem> updateAll(List<PortfolioItem> allItems) {
        Map<String, Stock> stocks;
        String[] symbols = getSymbolsForUpdate(allItems);
        stocks = yahooFinanceService.get(symbols); // single request, MIT-Lizenz
        return mapStocksToPortfolioItem(stocks, allItems);
    }

    private List<PortfolioItem> mapStocksToPortfolioItem(Map<String, Stock> stocks, List<PortfolioItem> allItems) {
        for (PortfolioItem portfolioItem : allItems) {

            BigDecimal regularMarketPrice = yahooFinanceService.getRegularMarketPrice(stocks, portfolioItem);
            BigDecimal regularMarketChangePercent = yahooFinanceService.getRegularMarketChangePercent(stocks, portfolioItem);
            BigDecimal dayHigh = yahooFinanceService.getDayHigh(stocks, portfolioItem);
            BigDecimal dayLow = yahooFinanceService.getDayLow(stocks, portfolioItem);
            BigDecimal yearHigh = yahooFinanceService.getYearHigh(stocks, portfolioItem);
            BigDecimal yearLow = yahooFinanceService.getYearLow(stocks, portfolioItem);
            BigDecimal dividend = yahooFinanceService.getDividend(stocks, portfolioItem);

            portfolioItem.setRegularMarketPrice(regularMarketPrice);
            portfolioItem.setRegularMarketChangePercent(regularMarketChangePercent);
            portfolioItem.setDayHigh(dayHigh);
            portfolioItem.setDayLow(dayLow);
            portfolioItem.setYearHigh(yearHigh);
            portfolioItem.setYearLow(yearLow);
            portfolioItem.setDividend(dividend);
        }
        return allItems;
    }

    private String[] getSymbolsForUpdate(List<PortfolioItem> allItems) {
        List<String> symbols = new ArrayList<>();
        for (PortfolioItem portfolioItem : allItems) {
            symbols.add(portfolioItem.getSymbol());
        }
        return symbols.toArray(new String[0]);
    }
}
