import {Typography} from "@mui/material";
import useStyles from "../styling/useStyles";
import CardGrid from "../components/CardGrid";
import theme from "../styling/theme";

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
            <Typography variant="h5" gutterBottom>
                {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(activeDepot.valueOfPortfolio)}
                </Typography>
            <Typography variant="h7">
                since purchase:&nbsp;
                {activeDepot.arithmeticalGain > 0 && '+'}
                {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(activeDepot.arithmeticalGain)}
                &nbsp;(
            </Typography>
            <Typography variant="h7" color={activeDepot.arithmeticalGain < 0 ? theme.palette.error.light : "lightgreen"} >
                {activeDepot.arithmeticalGain > 0 && '+'}
                {(activeDepot.arithmeticalGain / activeDepot.purchaseCostsOfPortfolio * 100).toFixed(2)}
                %
            </Typography>
            <Typography variant="h7">
                )
            </Typography>
            <CardGrid portfolioItems={activeDepot.portfolioItems} openPortfolioItem={openPortfolioItem} text={""}/>
        </div>
    )
}


