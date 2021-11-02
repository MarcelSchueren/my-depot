import {Button, Card, CardActions, Typography} from "@mui/material";
import CardContent from '@mui/material/CardContent';

export default function PortfolioItem({stock}) {

    return (
        <Card variant="outlined" align="center">
            <CardContent>
                <Typography variant="h4">{stock.displayName}</Typography>
                <Typography variant="h5">{stock.quantity} pcs. á {(stock.regularMarketPrice).toFixed(2)} $ </Typography>
                <Typography variant="h5"> = {(stock.quantity * stock.regularMarketPrice).toFixed(2)} $ </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small">More</Button>
            </CardActions>
        </Card>
    )
}

