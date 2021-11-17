package de.neufische.mydepot.security.repo;

import de.neufische.mydepot.security.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepo extends PagingAndSortingRepository<AppUser, String> {

}
