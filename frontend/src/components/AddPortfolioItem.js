import {Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import PortfolioItem from "./PortfolioItem";
import useStyles from "../hooks/useStyles";

export default function AddPortfolioItem({activePortfolioItem, clearActivePortfolioItem}) {

    const [portfolioItems, setPortfolioItems] = useState([])
    const [quantityPortfolioItem, setQuantityPortfolioItem] = useState(0)
    const classes = useStyles()

    if (!activePortfolioItem) {
        return <div></div>
    }

    const addPortfolioItem = event => {
        event.preventDefault()
        console.log(quantityPortfolioItem)
        if (!quantityPortfolioItem) {
            return
        }
        activePortfolioItem.quantity = quantityPortfolioItem
        activePortfolioItem.boughtAtPricePerShare = activePortfolioItem.regularMarketPrice
        setPortfolioItems([...portfolioItems, activePortfolioItem])
        // setQuantityPortfolioItem('')
        clearActivePortfolioItem()
    }

    return (
        <section>
            <Typography>Display-Name: {activePortfolioItem.displayName}</Typography>
            <Typography>Actual Price: {activePortfolioItem.regularMarketPrice} $ / piece</Typography>
            <Typography>id: {activePortfolioItem.id} $ / piece</Typography>

            {/*doesn't seem to work           */}

            <form onSubmit={addPortfolioItem}>
                <TextField
                    id="filled-number"
                    label="Number of pieces"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    // value={quantityPortfolioItem}
                    onChange={event => setQuantityPortfolioItem(event.target.value)}
                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Add with actual price"/>
                </FormGroup>
                <Button variant="outlined" onClick={addPortfolioItem}>Add</Button>
            </form>


            {portfolioItems.length === 0 ? <div></div> :
                <Container className={classes.cardGrid}>
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
        </section>
    )
}