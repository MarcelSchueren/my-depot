package de.neufische.mydepot.api;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
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
}
