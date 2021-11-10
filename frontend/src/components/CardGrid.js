import {Container, Grid, Typography} from "@mui/material";
import PortfolioItem from "./PortfolioItem";
import useStyles from "../hooks/useStyles";

export default function CardGrid({portfolioItems, text}){

    const classes = useStyles()

    return (
        <Container className={classes.cardGrid}>
            <Typography variant="h5" gutterBottom>{text}</Typography>
            <Grid container spacing={2}>
                {portfolioItems.map(stock => {
                    return (
                        <Grid item key={stock.id} xs={12} sm={6} md={4}>
                            <PortfolioItem stock={stock} key={stock.id}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}