package de.neufische.mydepot.service;

import de.neufische.mydepot.api.PortfolioApiService;
import de.neufische.mydepot.model.PortfolioItem;
import de.neufische.mydepot.repo.PortfolioItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class PortfolioItemService {

    private final PortfolioItemRepo portfolioItemRepo;
    private final PortfolioApiService portfolioApiService;

    @Autowired
    public PortfolioItemService(PortfolioItemRepo portfolioItemRepo, PortfolioApiService portfolioApiService) {
        this.portfolioItemRepo = portfolioItemRepo;
        this.portfolioApiService = portfolioApiService;
    }

    public List<PortfolioItem> getPortfolioItems() {
        updateAllPortfolioItems();
        return portfolioItemRepo.findAll();
    }

    private void updateAllPortfolioItems() {
        List<PortfolioItem> updatedPortfolioItems = portfolioApiService.updateAll(portfolioItemRepo.findAll());
        portfolioItemRepo.saveAll(updatedPortfolioItems);
    }

    public PortfolioItem createPortfolioItem(PortfolioItem newPortfolioItem) {
        return portfolioItemRepo.save(newPortfolioItem);
    }

    public PortfolioItem getPortfolioItemById(String id) {
        Optional<PortfolioItem> maybeExistingItem = portfolioItemRepo.findById(id);
        if (maybeExistingItem.isPresent()) {
            return maybeExistingItem.get();
        } else {
            throw new NoSuchElementException("PortfolioItem with id " + id + "not found!");
        }
    }
}