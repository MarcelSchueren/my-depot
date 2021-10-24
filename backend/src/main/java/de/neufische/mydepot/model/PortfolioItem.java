package de.neufische.mydepot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PortfolioItem {
    String id;                                      //von DB
    String displayName;                             //von Frontend/DB
    String symbol;                                  //von Frontend/DB
    double quantity;                                //von Frontend/DB
    double boughtAtPricePerShare;                   //von Frontend/DB
    BigDecimal regularMarketPrice;                  //aus API
    BigDecimal regularMarketChangePercent;          //aus API
}
