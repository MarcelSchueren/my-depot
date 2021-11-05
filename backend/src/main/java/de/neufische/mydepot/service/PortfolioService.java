package de.neufische.mydepot.service;

import de.neufische.mydepot.api.PortfolioApiService;
import de.neufische.mydepot.model.Portfolio;
import de.neufische.mydepot.model.PortfolioItem;
import de.neufische.mydepot.repo.PortfolioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PortfolioService {

    private final PortfolioRepo portfolioRepo;
    private final PortfolioApiService portfolioApiService;

    @Autowired
    public PortfolioService(PortfolioRepo portfolioRepo, PortfolioApiService portfolioApiService) {
        this.portfolioRepo = portfolioRepo;
        this.portfolioApiService = portfolioApiService;
    }

    public List<Portfolio> getPortfolios() {
        List<Portfolio> all = portfolioRepo.findAll();
        for (Portfolio p : all) {
            p.setPortfolioItems(portfolioApiService.updateAll(p.getPortfolioItems()));
            p.setValueOfPortfolio(BigDecimal.valueOf(calculateValueOfPortfolio(p)));
        }
        return all;
    }

    private double calculateValueOfPortfolio(Portfolio p) {
        double valueOfPortfolio = 0;
        for (PortfolioItem portfolioItem : p.getPortfolioItems()) {
            valueOfPortfolio += portfolioItem.getRegularMarketPrice().doubleValue() * portfolioItem.getQuantity();
        }
        return valueOfPortfolio;
    }

    public Portfolio createPortfolio(Portfolio newPortfolio) {
        return portfolioRepo.save(newPortfolio);
    }

    public Portfolio getPortfolioById(String id) {
        Portfolio portfolio = portfolioRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Portfolio with id " + id + "not found!"));
        portfolio.setPortfolioItems(portfolioApiService.updateAll(portfolio.getPortfolioItems()));
        return portfolio;
    }
}
