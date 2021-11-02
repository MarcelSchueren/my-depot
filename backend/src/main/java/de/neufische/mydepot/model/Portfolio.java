package de.neufische.mydepot.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Portfolio {
    String id;
    String name;
    List<PortfolioItem> portfolioItems;
}