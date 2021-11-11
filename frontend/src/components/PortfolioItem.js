import {Button, Card, Typography} from "@mui/material";
import useStyles from "../styling/useStyles";
import theme from "../styling/theme";

export default function PortfolioItem({stock}) {

    const classes = useStyles()

    const percentageChange = ((stock.quantity * stock.boughtAtPricePerShare)
            - (stock.quantity * stock.regularMarketPrice))
        / (stock.quantity * stock.boughtAtPricePerShare)
        * (-100)

    return (
        <Card className={classes.card}>
            <Typography variant="h4" className={classes.cardSymbol}>{stock.symbol}</Typography>
            <Typography variant="h5" className={classes.cardPercentageChange}
                        color={percentageChange < 0 ? theme.palette.error.light : "lightgreen"}>
                {percentageChange.toFixed(2)}
                %
            </Typography>
            <Typography className={classes.cardDisplayName}>{stock.displayName}</Typography>
            <Typography className={classes.cardQuantity}>{stock.quantity} pcs.
                á {(stock.regularMarketPrice).toFixed(2)} € </Typography>
            <Typography variant="h6"
                        className={classes.cardSum}> {(stock.quantity * stock.regularMarketPrice).toFixed(2)} € </Typography>
            <Button size="small">More</Button>
        </Card>
    )
}

