import {Container, Grid, Typography} from "@mui/material";
import Portfolio from "../components/Portfolio";
import useStyles from "../hooks/useStyles";

export default function OpenDepotPage({depots, openDepot}) {

    const classes = useStyles();

    if (!depots) {
        return <div> No active depots! Create one with "new"</div>
    }

    return (
        <div className={classes.page}>
            <Typography variant="h4" gutterBottom>Chose a depot:</Typography>
            <Container className={classes.cardGrid}>
                <Grid container spacing={2}>
                    {depots.map(depot => {
                        return (
                            <Grid item key={depot.name} xs={12} sm={6} md={4}>
                                <Portfolio depot={depot} key={depot.id} openDepot={openDepot}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

