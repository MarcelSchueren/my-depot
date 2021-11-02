package de.neufische.mydepot.controller;

import de.neufische.mydepot.model.PortfolioItem;
import de.neufische.mydepot.service.PortfolioItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stocks")
public class PortfolioItemController {

    private final PortfolioItemService portfolioItemService;

    @Autowired
    public PortfolioItemController(PortfolioItemService portfolioItemService) {
        this.portfolioItemService = portfolioItemService;
    }

    @GetMapping
    public List<PortfolioItem> getAllItems() {
        return portfolioItemService.getPortfolioItems();
    }

    @GetMapping("/{id}")
    public PortfolioItem getPortfolioItem(@PathVariable String id) {
        return portfolioItemService.getPortfolioItemById(id);
    }

    @PostMapping
    public PortfolioItem createPortfolioItem(@RequestBody PortfolioItem newPortfolioItem) {
        return portfolioItemService.createPortfolioItem(newPortfolioItem);
    }
}
