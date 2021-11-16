package de.neufische.mydepot.controller;

import de.neufische.mydepot.model.PortfolioItem;
import de.neufische.mydepot.service.PortfolioItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/portfolioItem")
public class PortfolioItemController {

    private final PortfolioItemService portfolioItemService;

    @Autowired
    public PortfolioItemController(PortfolioItemService portfolioItemService) {
        this.portfolioItemService = portfolioItemService;
    }

    @GetMapping("{symbol}")
    public PortfolioItem getPortfolioItem(@PathVariable String symbol) {
        return portfolioItemService.getPortfolioItemBySymbol(symbol);
    }
}