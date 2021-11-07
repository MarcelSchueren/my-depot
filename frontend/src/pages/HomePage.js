import {Container, Grid, Typography} from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";
import useStyles from "../hooks/useStyles";

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
            <Container className={classes.cardGrid} >
                <Grid container spacing={2}>
                    {activeDepot.portfolioItems.map(stock => {
                        return (
                            <Grid item key={stock.displayName} xs={12} sm={6} md={4} >
                                <PortfolioItem stock={stock} key={stock.id}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}


