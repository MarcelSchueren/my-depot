package de.neufische.mydepot.api;

import de.neufische.mydepot.model.PortfolioItem;
import org.springframework.stereotype.Service;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PortfolioApiService {

    public List<PortfolioItem> updateAll(List<PortfolioItem> all) {
        Map<String, Stock> stocks = new HashMap<>();
        String[] symbols = getSymbolsForUpdate(all);
        try {
            stocks = YahooFinance.get(symbols); // single request
        } catch (IOException e) {
            System.err.println("Error in PortfolioApiService: updateAll");
            e.printStackTrace();
        }
        return mapStocksToPortfolioItem(stocks, all);
    }

    private List<PortfolioItem> mapStocksToPortfolioItem(Map<String, Stock> stocks, List<PortfolioItem> all) {
        for (PortfolioItem portfolioItem : all) {
            BigDecimal regularMarketPrice = stocks.get(portfolioItem.getSymbol()).getQuote().getPrice();
            BigDecimal regularMarketChangePercent = stocks.get(portfolioItem.getSymbol()).getQuote().getChangeInPercent();
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