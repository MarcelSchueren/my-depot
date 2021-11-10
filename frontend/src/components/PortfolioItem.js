import {Button, Card, CardActions, Typography} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import useStyles from "../hooks/useStyles";

export default function PortfolioItem({stock}) {

    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h4" align="left">{stock.displayName}</Typography>
                <Typography variant="h5">{stock.quantity} pcs. á {(stock.regularMarketPrice).toFixed(2)} € </Typography>
                <Typography variant="h5"> = {(stock.quantity * stock.regularMarketPrice).toFixed(2)} € </Typography>
                <Typography variant="h5">
                    {
                        (((stock.quantity * stock.boughtAtPricePerShare) - (stock.quantity * stock.regularMarketPrice))
                            / (stock.quantity * stock.boughtAtPricePerShare)
                            * -100).toFixed(2)
                    }
                    %
                </Typography>

            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small">More</Button>
            </CardActions>
        </Card>

    )
}

// align="center"