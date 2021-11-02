package de.neufische.mydepot.service;

import de.neufische.mydepot.model.Portfolio;
import de.neufische.mydepot.model.PortfolioItem;
import de.neufische.mydepot.repo.PortfolioItemRepo;
import de.neufische.mydepot.repo.PortfolioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class PortfolioService {

    private final PortfolioRepo portfolioRepo;

    @Autowired
    public PortfolioService(PortfolioRepo portfolioRepo) {
        this.portfolioRepo = portfolioRepo;
    }

    public List<Portfolio> getPortfolios() {
        return portfolioRepo.getAllDepots();
    }

    public Portfolio createPortfolio(Portfolio newPortfolio) {
        return portfolioRepo.save(newPortfolio);
    }

    public Portfolio getPortfolioById(String id) {
        Optional<Portfolio> maybePortfolio = portfolioRepo.findById(id);
        if (maybePortfolio.isEmpty()) {
            throw new NoSuchElementException("Portfolio with id " + id + "not found!");
        } else {
            return maybePortfolio.get();
        }
    }


}