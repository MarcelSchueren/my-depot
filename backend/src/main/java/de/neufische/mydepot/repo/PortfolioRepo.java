package de.neufische.mydepot.repo;

import de.neufische.mydepot.model.Portfolio;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioRepo extends PagingAndSortingRepository<Portfolio, String> {
    List<Portfolio> findAll();
}