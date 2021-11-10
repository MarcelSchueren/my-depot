import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup, InputAdornment,
    InputLabel, OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";

export default function AddPortfolioItem({
                                             activePortfolioItem,
                                             clearActivePortfolioItem,
                                             portfolioItems,
                                             setPortfolioItems
                                         }) {


    const [quantityPortfolioItem, setQuantityPortfolioItem] = useState(0)
    const [checked, setChecked] = useState(true)
    const [boughtAtPrice, setBoughtAtPrice] = useState()

    if (!activePortfolioItem) {
        return <></>
    }

    const addPortfolioItem = event => {
        event.preventDefault()
        if (quantityPortfolioItem <= 0) {
            return
        }
        activePortfolioItem.quantity = quantityPortfolioItem
        if (checked) {
            activePortfolioItem.boughtAtPricePerShare = activePortfolioItem.regularMarketPrice
        } else {
            activePortfolioItem.boughtAtPricePerShare = boughtAtPrice;
        }
        setPortfolioItems([...portfolioItems, activePortfolioItem])
        setQuantityPortfolioItem(0)
        clearActivePortfolioItem()
        setChecked(true)
        setBoughtAtPrice(0)
    }

    return (
        <section>
            <Typography>Display-Name: {activePortfolioItem.displayName}</Typography>
            <Typography>Actual Price: {activePortfolioItem.regularMarketPrice} $ / piece</Typography>
            <TextField
                id="filled-number"
                label="Number of pieces"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                InputProps={{inputProps: {min: 1}}}
                // value={quantityPortfolioItem}
                onChange={event => setQuantityPortfolioItem(event.target.value)}
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked onChange={() => setChecked(!checked)}/>}
                                  label="Add with actual price"/>
            </FormGroup>
            {checked === false ?
                <FormControl>
                    <InputLabel htmlFor="amount">Price / p.</InputLabel>
                    <OutlinedInput
                        id="amount"
                        value={boughtAtPrice}
                        onChange={(event) => setBoughtAtPrice(event.target.value)}
                        startAdornment={<InputAdornment position="start">€</InputAdornment>}
                        label="Amount"
                    />
                </FormControl> : <></>}
            <Button variant="outlined" onClick={addPortfolioItem}>Add</Button>
        </section>
    )
}