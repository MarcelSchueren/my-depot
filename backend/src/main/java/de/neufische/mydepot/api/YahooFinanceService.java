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
import java.util.Collections;
import java.util.Map;

@Log4j2
@Service
public class YahooFinanceService {

    private final FxQuote usdeur;

    public YahooFinanceService() throws IOException {
        usdeur = YahooFinance.getFx(FxSymbols.USDEUR);
    }

    public Map<String, Stock> get(String[] symbols) {
        try {
            return YahooFinance.get(symbols);
        } catch (IOException e) {
            log.error("Error in YahooFinanceService: get", e);
        }
        return Collections.emptyMap();
    }

    public Stock getPortfolioItemBySymbol(String symbol) {
        try {
            return YahooFinance.get(symbol);
        } catch (IOException e) {
            log.error("Error in YahooFinanceService: getPortfolioItemBySymbol", e);
        }
        return null;
    }

    public BigDecimal getRegularMarketPrice(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        if (stocks.get(portfolioItem.getSymbol()).getCurrency().equals("USD")) {
            return changeUSDinEUR(stocks.get(portfolioItem.getSymbol()).getQuote().getPrice());
        }
        return stocks.get(portfolioItem.getSymbol()).getQuote().getPrice();
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
        if (stocks.get(portfolioItem.getSymbol()).getCurrency().equals("USD")) {
            return changeUSDinEUR(stocks.get(portfolioItem.getSymbol()).getQuote().getDayHigh());
        }
        return stocks.get(portfolioItem.getSymbol()).getQuote().getDayHigh();
    }

    public BigDecimal getDayLow(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        if (stocks.get(portfolioItem.getSymbol()).getCurrency().equals("USD")) {
            return changeUSDinEUR(stocks.get(portfolioItem.getSymbol()).getQuote().getDayLow());
        }
        return stocks.get(portfolioItem.getSymbol()).getQuote().getDayLow();
    }

    public BigDecimal getYearHigh(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        if (stocks.get(portfolioItem.getSymbol()).getCurrency().equals("USD")) {
            return changeUSDinEUR(stocks.get(portfolioItem.getSymbol()).getQuote().getYearHigh());
        }
            return stocks.get(portfolioItem.getSymbol()).getQuote().getYearHigh();
    }

    public BigDecimal getYearLow(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        if (stocks.get(portfolioItem.getSymbol()).getCurrency().equals("USD")) {
            return changeUSDinEUR(stocks.get(portfolioItem.getSymbol()).getQuote().getYearLow());
        }
            return stocks.get(portfolioItem.getSymbol()).getQuote().getYearLow();
    }

    public BigDecimal getDividend(Map<String, Stock> stocks, PortfolioItem portfolioItem) {
        if(stocks.get(portfolioItem.getSymbol()).getDividend().getAnnualYieldPercent() == null){
            return BigDecimal.ZERO;
        }
        return stocks.get(portfolioItem.getSymbol()).getDividend().getAnnualYieldPercent();
    }
}
