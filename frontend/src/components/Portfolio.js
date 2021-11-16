import {Button, Card, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import useStyles from "../styling/useStyles";
import theme from "../styling/theme";

export default function Portfolio({depot, openDepot}) {

    const classes = useStyles()
    const history = useHistory()

    const handleClick = () => {
        openDepot(depot)
        history.push("/")
    }

    const percentageChange = (depot.purchaseCostsOfPortfolio - depot.valueOfPortfolio) / (depot.purchaseCostsOfPortfolio) * (-100)
    const absoluteGain = depot.valueOfPortfolio - depot.purchaseCostsOfPortfolio

    return (
        <Card className={classes.card}>
            <Typography className={classes.cardDepotName}>{depot.name}</Typography>
            <Typography className={classes.cardValueOfPortfolio}>{depot.valueOfPortfolio.toFixed(2)} € </Typography>
            <Typography className={classes.cardPortfolioPercentageChange}
                        color={percentageChange < 0 ? theme.palette.error.light : "lightgreen"}>
                {percentageChange > 0 && '+'}
                {percentageChange.toFixed(2)}
                %
            </Typography>
            <Typography className={classes.cardPortfolioAbsoluteChange}
                        color={absoluteGain < 0 ? theme.palette.error.light : "lightgreen"}>
                {percentageChange > 0 && '+'}
                {absoluteGain.toFixed(2)}
                €
            </Typography>
            <Button className={classes.cardPortfolioButton} size="small" onClick={handleClick}>Open</Button>
        </Card>
    )
}
