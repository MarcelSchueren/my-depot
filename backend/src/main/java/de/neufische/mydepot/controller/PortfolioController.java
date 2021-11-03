package de.neufische.mydepot.controller;

import de.neufische.mydepot.model.Portfolio;
import de.neufische.mydepot.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/portfolios")
public class PortfolioController {

    private final PortfolioService portfolioService;

    @Autowired
    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public List<Portfolio> getAllItems() {
        return portfolioService.getPortfolios();
    }

    @GetMapping("/{id}")
    public Portfolio getPortfolio(@PathVariable String id) {
        return portfolioService.getPortfolioById(id);
    }

    @PostMapping
    public Portfolio createPortfolio(@RequestBody Portfolio newPortfolio) {
        return portfolioService.createPortfolio(newPortfolio);
    }

}
