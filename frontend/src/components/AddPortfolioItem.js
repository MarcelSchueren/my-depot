import {Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import {useState} from "react";

export default function AddPortfolioItem({activePortfolioItem, clearActivePortfolioItem, portfolioItems, setPortfolioItems}) {


    const [quantityPortfolioItem, setQuantityPortfolioItem] = useState(0)

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
        </section>
    )
}