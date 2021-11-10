import {Typography} from "@mui/material";
import useStyles from "../hooks/useStyles";
import CardGrid from "../components/CardGrid";

export default function HomePage({activeDepot}) {

    const classes = useStyles();

    if (!activeDepot) {
        return <div> Please chose an active depot </div>
    }

    return (
        <div className={classes.page}>
            <Typography variant="h4" gutterBottom>{activeDepot.name}</Typography>
            <Typography variant="h5" gutterBottom>{activeDepot.valueOfPortfolio.toFixed(2)} $ </Typography>
            <Typography variant="h7"> since purchase: {activeDepot.arithmeticalGain.toFixed(2)} $ </Typography>
            <CardGrid portfolioItems={activeDepot.portfolioItems} text={""}/>
        </div>
    )
}


