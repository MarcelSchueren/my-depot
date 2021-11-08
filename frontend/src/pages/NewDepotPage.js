import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import useStyles from "../hooks/useStyles";
import {useState} from "react";
import {addPortfolio, getPortfolioItem} from "../service/depot-api-service";
import AddPortfolioItem from "../components/AddPortfolioItem";
import PortfolioItem from "../components/PortfolioItem";

export default function NewDepotPage() {

    const [portfolioName, setPortfolioName] = useState()
    const [symbol, setSymbol] = useState()
    const [activePortfolioItem, setActivePortfolioItem] = useState()
    const [portfolioItems, setPortfolioItems] = useState([])

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

    // const calculatePurchaseCostsOfPortfolio = () => {
    //     let costs = 0;
    //     portfolioItems.map(portfolioItem => {
    //         costs+= portfolioItem.boughtAtPricePerShare
    //     })
    //     return costs
    // }

    const saveDepot = () => {
        const newDepot = {
            "id": "",
            "name": portfolioName,
            "portfolioItems": portfolioItems,
            "valueOfPortfolio": "0",
            "purchaseCostsOfPortfolio": 0,
            "arithmeticalGain": 0,
        }
        addPortfolio(newDepot).then(response => console.log(response))
        //+ clear site
    }

    return (
        <div className={classes.page}>
            <Typography variant="h4" gutterBottom>Create a new depot:</Typography>
            <TextField id="depotName" label="Name your new Depot" variant="outlined"
                       onChange={event => setPortfolioName(event.target.value)}/>
            <form onSubmit={handleSymbolSubmit}>
                <Typography variant="h5" gutterBottom>Add a stock:</Typography>
                <TextField id="stockName" label="Enter symbol" variant="outlined" value={symbol}
                           onChange={event => setSymbol(event.target.value)}/>
            </form>
            <AddPortfolioItem
                activePortfolioItem={activePortfolioItem}
                clearActivePortfolioItem={clearActivePortfolioItem}
                portfolioItems={portfolioItems}
                setPortfolioItems={setPortfolioItems}/>

            {portfolioItems.length > 0 ? <Button variant="contained" onClick={saveDepot}> Save Depot </Button> : <></>}

            {portfolioItems.length === 0 ? <></> :
                <Container className={classes.cardGrid}>
                    <Typography variant="h5" gutterBottom>Already added:</Typography>
                    <Grid container spacing={2}>
                        {portfolioItems.map(stock => {
                            return (
                                <Grid item key={stock.id} xs={12} sm={6} md={4}>
                                    <PortfolioItem stock={stock} key={stock.id}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>}
        </div>
    )
}

