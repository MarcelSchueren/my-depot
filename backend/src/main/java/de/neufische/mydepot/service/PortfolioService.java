package de.neufische.mydepot.service;

import de.neufische.mydepot.api.PortfolioApiService;
import de.neufische.mydepot.model.Portfolio;
import de.neufische.mydepot.repo.PortfolioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

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
        return portfolioRepo.findAll();
    }

    public Portfolio createPortfolio(Portfolio newPortfolio) {
        return portfolioRepo.save(newPortfolio);
    }

    public Portfolio getPortfolioById(String id) {
        Optional<Portfolio> maybePortfolio = portfolioRepo.findById(id);
        if (maybePortfolio.isEmpty()) {
            throw new NoSuchElementException("Portfolio with id " + id + "not found!");
        } else {
            Portfolio portfolioToUpdate =  maybePortfolio.get();
            portfolioToUpdate.setPortfolioItems(portfolioApiService.updateAll(portfolioToUpdate.getPortfolioItems()));
            return portfolioToUpdate;
        }
    }
}