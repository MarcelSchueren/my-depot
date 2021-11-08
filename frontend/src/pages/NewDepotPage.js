import {TextField, Typography} from "@mui/material";
import useStyles from "../hooks/useStyles";
import {useState} from "react";
import {getPortfolioItem} from "../service/depot-api-service";
import AddPortfolioItem from "../components/AddPortfolioItem";

export default function NewDepotPage() {

    const [symbol, setSymbol] = useState()
    const [activePortfolioItem, setActivePortfolioItem] = useState()

    const classes = useStyles()

    const clearActivePortfolioItem = () => {
        setActivePortfolioItem()
        setSymbol('')
    }

    const handleSymbolSubmit = event => {
        event.preventDefault()
        if (!symbol) {
            return <div>Couldn't find item with symbol: {symbol}</div>
        }
        getPortfolioItem(symbol).then(portfolioItem => setActivePortfolioItem(portfolioItem))
    }

    return (
        <div className={classes.page}>
            <Typography variant="h4" gutterBottom>Create a new depot:</Typography>
            <TextField id="depotName" label="Name your new Depot" variant="outlined" />
            <form onSubmit={handleSymbolSubmit}>
                <Typography variant="h5" gutterBottom>Add a stock:</Typography>
                <TextField id="stockName" label="Enter symbol" variant="outlined" value={symbol} onChange={event => setSymbol(event.target.value)}/>
            </form>
            <AddPortfolioItem activePortfolioItem={activePortfolioItem} clearActivePortfolioItem={clearActivePortfolioItem}/>
        </div>
    )
}

