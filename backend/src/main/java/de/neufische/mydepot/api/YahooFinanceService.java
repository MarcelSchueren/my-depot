package de.neufische.mydepot.api;

import de.neufische.mydepot.model.PortfolioItem;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.quotes.fx.FxQuote;
import yahoofinance.quotes.fx.FxSymbols;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;

@Log4j2
@Service
public class YahooFinanceService {

    public static final String USD = "USD";
    private final FxQuote usdeur;

    public YahooFinanceService() throws IOException {
        usdeur = YahooFinance.getFx(FxSymbols.USDEUR);
    }

    public Map<String, Stock> get(String[] symbols) {
        try {
            return YahooFinance.get(symbols);
        } catch (IOException e) {
            log.error("Ausleseproblem...Error in YahooFinanceService: get");
            throw new YahooApiException("Probleme reading the data from YahooFinance with symbols: " + Arrays.toString(symbols), e);
        }
    }

    public Stock getPortfolioItemBySymbol(String symbol) {
        try {
            return YahooFinance.get(symbol);
        } catch (IOException e) {
            log.error("Ausleseproblem...Error in YahooFinanceService: get");
            throw new YahooApiException("Probleme reading the data from YahooFinance with symbol: " + symbol , e);
        }
    }

    public BigDecimal getRegularMarketPrice(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        Stock stock = stocks.get(portfolioItem.getSymbol());
        if (stock.getCurrency().equals(USD)) {
            return changeUSDinEUR(stock.getQuote().getPrice());
        }
        return stock.getQuote().getPrice();
    }

    public BigDecimal getRegularMarketChangePercent(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        return stocks.get(portfolioItem.getSymbol()).getQuote().getChangeInPercent();
    }

    public BigDecimal getRegularMarketPrice(Stock stock) {
        if (stock.getCurrency().equals("USD")) {
            return changeUSDinEUR(stock.getQuote().getPrice());
        }
        return stock.getQuote().getPrice();
    }

    private BigDecimal changeUSDinEUR(BigDecimal priceInUSD) {
        return priceInUSD.multiply(usdeur.getPrice());
    }

    public String getDisplayName(Stock stock) {
        return stock.getName();
    }

    public BigDecimal getDayHigh(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        Stock stock = stocks.get(portfolioItem.getSymbol());
        if (stock.getCurrency().equals("USD")) {
            return changeUSDinEUR(stock.getQuote().getDayHigh());
        }
        return stock.getQuote().getDayHigh();
    }

    public BigDecimal getDayLow(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        Stock stock = stocks.get(portfolioItem.getSymbol());
        if (stock.getCurrency().equals("USD")) {
            return changeUSDinEUR(stock.getQuote().getDayLow());
        }
        return stock.getQuote().getDayLow();
    }

    public BigDecimal getYearHigh(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        Stock stock = stocks.get(portfolioItem.getSymbol());
        if (stock.getCurrency().equals("USD")) {
            return changeUSDinEUR(stock.getQuote().getYearHigh());
        }
        return stock.getQuote().getYearHigh();
    }

    public BigDecimal getYearLow(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        Stock stock = stocks.get(portfolioItem.getSymbol());
        if (stock.getCurrency().equals("USD")) {
            return changeUSDinEUR(stock.getQuote().getYearLow());
        }
        return stock.getQuote().getYearLow();
    }

    public BigDecimal getDividend(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        Stock stock = stocks.get(portfolioItem.getSymbol());
        if (stock.getDividend().getAnnualYieldPercent() == null) {
            return BigDecimal.ZERO;
        }
        return stock.getDividend().getAnnualYieldPercent();
    }
}
