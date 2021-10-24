package de.neufische.mydepot.repo;

import de.neufische.mydepot.model.PortfolioItem;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioItemRepo extends PagingAndSortingRepository<PortfolioItem, String> {
    List<PortfolioItem> findAll();
}
