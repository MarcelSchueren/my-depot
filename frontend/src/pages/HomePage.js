import {Typography} from "@mui/material";
import useStyles from "../styling/useStyles";
import CardGrid from "../components/CardGrid";

export default function HomePage({activeDepot, openPortfolioItem}) {

    const classes = useStyles();

    if (!activeDepot) {
        return (
            <div className={classes.page}>
                <Typography variant="h5">Please chose an active depot</Typography>
            </div>
        )
    }

    return (
        <div className={classes.page}>
            <Typography variant="h4" gutterBottom>{activeDepot.name}</Typography>
            <Typography variant="h5" gutterBottom>{activeDepot.valueOfPortfolio.toFixed(2)} € </Typography>
            <Typography variant="h7">
                since purchase: {activeDepot.arithmeticalGain.toFixed(2)} €
                ({
                (activeDepot.arithmeticalGain / activeDepot.purchaseCostsOfPortfolio * 100).toFixed(2)
            }%)
            </Typography>
            <CardGrid portfolioItems={activeDepot.portfolioItems} openPortfolioItem={openPortfolioItem} text={""}/>
        </div>
    )
}


