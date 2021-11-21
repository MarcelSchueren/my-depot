import {Button, Card, Typography} from "@mui/material";
import useStyles from "../styling/useStyles";
import theme from "../styling/theme";
import {useHistory} from "react-router-dom";

export default function PortfolioItem({stock, openPortfolioItem, short}) {

    const classes = useStyles()
    const history = useHistory()

    const absoluteChange = (-1)*(stock.quantity * stock.boughtAtPricePerShare
        - stock.quantity * stock.regularMarketPrice)
    const percentageChange = absoluteChange
        / (stock.quantity * stock.boughtAtPricePerShare)
        * (100)

    const color = percentageChange < 0 ? theme.palette.error.light : "lightgreen"

    return (
        <Card className={classes.card}>
            <Typography variant="h4" className={classes.cardSymbol}>{stock.symbol}</Typography>
            <Typography variant="h5" className={classes.cardPercentageChange}
                        color={color}>
                {percentageChange > 0 && '+'}
                {percentageChange.toFixed(2)}
                %
            </Typography>
            <Typography className={classes.cardDisplayName}>{stock.displayName}</Typography>
            <Typography className={classes.cardQuantity}>{stock.quantity} pcs.
                á {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(stock.regularMarketPrice)} </Typography>
            <Typography variant="h6"
                        className={classes.cardSum}>
                {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(stock.quantity * stock.regularMarketPrice)}
            </Typography>

            {short? <Typography
                    align="right"
                    margin="10px"
                    color={color}>
                    {absoluteChange.toFixed(2)}
                    €
            </Typography> :
            <Button size="small"
                    onClick={() => {
                        openPortfolioItem(stock)
                        history.push(`/details/${stock.id}`)
                    }}>More
            </Button>}
        </Card>
    )
}

