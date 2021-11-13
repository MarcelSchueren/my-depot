package de.neufische.mydepot.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class PortfolioItem {
    private String id;                                      //von DB
    private String displayName;                             //von Frontend/DB
    private String symbol;                                  //von Frontend/DB
    private double quantity;                                //von Frontend/DB
    private double boughtAtPricePerShare;                   //von Frontend/DB
    private BigDecimal regularMarketPrice;                  //aus API
    private BigDecimal regularMarketChangePercent;          //aus API
    private BigDecimal dayHigh;
    private BigDecimal dayLow;
    private BigDecimal yearHigh;
    private BigDecimal yearLow;
    private BigDecimal dividend;
}
