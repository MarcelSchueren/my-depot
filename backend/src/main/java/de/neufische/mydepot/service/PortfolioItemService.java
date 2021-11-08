package de.neufische.mydepot.service;

import de.neufische.mydepot.api.PortfolioItemApiService;
import de.neufische.mydepot.model.PortfolioItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PortfolioItemService {

    private final PortfolioItemApiService portfolioItemApiService;

    @Autowired
    public PortfolioItemService(PortfolioItemApiService portfolioItemApiService) {
        this.portfolioItemApiService = portfolioItemApiService;
    }

    public PortfolioItem getPortfolioItemBySymbol(String symbol) {
        return portfolioItemApiService.getPortfolioItemBySymbol(symbol.toUpperCase());
    }
}
