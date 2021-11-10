import {Button, TextField, Typography} from "@mui/material";
import useStyles from "../hooks/useStyles";
import {useState} from "react";
import {addPortfolio, getPortfolioItem} from "../service/depot-api-service";
import AddPortfolioItem from "../components/AddPortfolioItem";
import {useHistory} from "react-router-dom";
import useDepots from "../hooks/useDepots";
import CardGrid from "../components/CardGrid";

export default function NewDepotPage() {

    const [portfolioName, setPortfolioName] = useState()
    const [symbol, setSymbol] = useState("")
    const [symbolIsWrong, setSymbolIsWrong] = useState(false)
    const [activePortfolioItem, setActivePortfolioItem] = useState()
    const [portfolioItems, setPortfolioItems] = useState([])
    const history = useHistory()
    const {update, addDepot} = useDepots()

    const classes = useStyles()

    const clearActivePortfolioItem = () => {
        setActivePortfolioItem()
        setSymbol('')
    }

    const handleSymbolSubmit = event => {
        event.preventDefault()
        setSymbolIsWrong(false)
        if (symbol==="") {
            return <></>
        }
        getPortfolioItem(symbol)
            .catch(() => {setSymbolIsWrong(true)})
            .then(portfolioItem => setActivePortfolioItem(portfolioItem))
    }

    const saveDepot = () => {
        if (portfolioName === '' || portfolioName === undefined) {
            return;
        }
        const newDepot = {
            "name": portfolioName,
            "portfolioItems": portfolioItems,
            "valueOfPortfolio": "0",
            "purchaseCostsOfPortfolio": 0,
            "arithmeticalGain": 0,
        }

        addPortfolio(newDepot)
            .then(responseDepot => addDepot(responseDepot))
            .then(update)
            .catch(error => {console.error(error.message)})
            .then(history.push('/open'))
    }

    return (
        <div className={classes.page}>
            <Typography variant="h4" gutterBottom>Create a new depot</Typography>
            <TextField id="depotName" label="Name your new Depot" variant="outlined" autoComplete='off'
                       margin="normal"
                       onChange={event => setPortfolioName(event.target.value)}/>
            <form onSubmit={handleSymbolSubmit}>
                <Typography variant="h5">Add a stock:</Typography>
                <TextField id="stockName" label="Enter symbol" variant="outlined" value={symbol} autoComplete='off'
                           margin="normal"
                           error={symbolIsWrong}
                           onChange={event => setSymbol(event.target.value)}/>
            </form>
            <AddPortfolioItem
                activePortfolioItem={activePortfolioItem}
                clearActivePortfolioItem={clearActivePortfolioItem}
                portfolioItems={portfolioItems}
                setPortfolioItems={setPortfolioItems}/>

            {portfolioItems.length > 0 ?
                <div>
                    <Typography variant="h5" gutterBottom>Add more stocks or save your depot</Typography>
                    <Button variant="contained" onClick={saveDepot}> Save Depot </Button>
                </div>
                : <></>}
            {portfolioItems.length === 0 ? <></> : <CardGrid portfolioItems={portfolioItems} text={"Added"}/>}
        </div>
    )
}