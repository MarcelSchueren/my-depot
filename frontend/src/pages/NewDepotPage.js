import {Button, TextField, Typography} from "@mui/material";
import useStyles from "../styling/useStyles";
import {useState} from "react";
import {getPortfolioItem} from "../service/depot-api-service";
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
    const [noNameYet, setNoNameYet] = useState(false)
    const history = useHistory()
    const {addDepot} = useDepots()

    const classes = useStyles()

    const clearActivePortfolioItem = () => {
        setActivePortfolioItem()
        setSymbol('')
    }

    const handleSymbolSubmit = event => {
        event.preventDefault()
        setSymbolIsWrong(false)
        if (symbol === "") {
            return
        }
        getPortfolioItem(symbol)
            .catch(() => {
                setSymbolIsWrong(true)
            })
            .then(portfolioItem => setActivePortfolioItem(portfolioItem))
    }

    const saveDepot = () => {
        if (!portfolioName?.length) {
            setNoNameYet(true);
            return;
        }
        const newDepot = {
            "name": portfolioName,
            "portfolioItems": portfolioItems,
            "valueOfPortfolio": "0",
            "purchaseCostsOfPortfolio": 0,
            "arithmeticalGain": 0,
        }

        addDepot(newDepot)
            .then(() => {
                history.push('/open')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={classes.newPortfolioPage}>

            <div>
                <Typography variant="h4" gutterBottom>Create a new depot</Typography>
                <TextField id="depotName"
                           label="Name your new Depot"
                           variant="outlined"
                           autoComplete='off'
                           error={noNameYet}
                           onChange={event => {
                               setPortfolioName(event.target.value)
                               setNoNameYet(false)
                           }}/>
            </div>

            <Typography variant="h5" margin="normal">
                Add a stock
            </Typography>
            <form onSubmit={handleSymbolSubmit}>
                <TextField id="stockName"
                           label="Enter symbol"
                           variant="outlined"
                           size="small"
                           value={symbol}
                           autoComplete='off'
                           error={symbolIsWrong}
                           onChange={event => setSymbol(event.target.value)}/>
                <Button margin="normal" variant="outlined" onClick={handleSymbolSubmit}>Search</Button>
            </form>

            <AddPortfolioItem
                activePortfolioItem={activePortfolioItem}
                clearActivePortfolioItem={clearActivePortfolioItem}
                portfolioItems={portfolioItems}
                setPortfolioItems={setPortfolioItems}/>

            {
                portfolioItems.length > 0 &&
                <div>
                    <Typography variant="h5" gutterBottom>
                        Add more stocks or save your depot
                    </Typography>
                    <Button variant="contained" onClick={saveDepot}>
                        Save Depot
                    </Button>
                </div>
            }
            {
                portfolioItems.length !== 0 && <CardGrid portfolioItems={portfolioItems} text={"Added"}/>
            }
        </div>
    )
}