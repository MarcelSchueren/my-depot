import {TextField, Typography} from "@mui/material";
import useStyles from "../hooks/useStyles";
import {useState} from "react";
import {getPortfolioItem} from "../service/depot-api-service";

export default function NewDepotPage() {

    const [symbol, setSymbol] = useState()
    const [activePortfolioItem, setActivePortfolioItem] = useState()

    const classes = useStyles()

    const handleSymbolSubmit = event => {
        event.preventDefault()
        if (!symbol) {
            return
        }
        getPortfolioItem(symbol).then(portfolioItem => setActivePortfolioItem(portfolioItem))
        setSymbol('')
    }

    return (
        <div className={classes.page}>
            <Typography variant="h4" gutterBottom>Create a new depot:</Typography>
            <TextField id="depotName" label="Name your new Depot" variant="outlined"/>
            <form onSubmit={handleSymbolSubmit}>
                <Typography variant="h5" gutterBottom>Add a stock:</Typography>
                <TextField id="stockName" label="Enter symbol" variant="outlined" onChange={event => setSymbol(event.target.value)}/>
            </form>

            {activePortfolioItem? <Typography>Display-Name: {activePortfolioItem.displayName}</Typography> : <></>}
            {activePortfolioItem? <Typography>Actual Price: {activePortfolioItem.regularMarketPrice} $ / piece</Typography> : <></>}
            <TextField
                id="filled-number"
                label="Number of pieces"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
            />


        </div>
    )
}

