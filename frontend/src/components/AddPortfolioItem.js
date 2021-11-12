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
import useStyles from "../styling/useStyles";

export default function AddPortfolioItem({
                                             activePortfolioItem,
                                             clearActivePortfolioItem,
                                             portfolioItems,
                                             setPortfolioItems
                                         }) {


    const [quantityPortfolioItem, setQuantityPortfolioItem] = useState(0)
    const [checkedActualPrice, setCheckedActualPrice] = useState(true)
    const [boughtAtPrice, setBoughtAtPrice] = useState()
    const classes = useStyles()

    if (!activePortfolioItem) {
        return <></>
    }

    const addPortfolioItem = event => {
        event.preventDefault()
        if (quantityPortfolioItem <= 0) {
            return
        }
        activePortfolioItem.quantity = quantityPortfolioItem
        if (checkedActualPrice) {
            activePortfolioItem.boughtAtPricePerShare = activePortfolioItem.regularMarketPrice
        } else {
            activePortfolioItem.boughtAtPricePerShare = boughtAtPrice;
        }
        setPortfolioItems([...portfolioItems, activePortfolioItem])

        setQuantityPortfolioItem(0)
        clearActivePortfolioItem()
        setCheckedActualPrice(true)
        setBoughtAtPrice(0)
    }

    return (
        <section className={classes.addPortfolioItem}>
            <Typography>Found: {activePortfolioItem.displayName}</Typography>
            <Typography>Price: {activePortfolioItem.regularMarketPrice.toFixed(2)} € / piece</Typography>
            <TextField
                id="filled-number"
                label="Number of pieces"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                InputProps={{inputProps: {min: 1}}}
                onChange={event => setQuantityPortfolioItem(event.target.value)}
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked onChange={() => setCheckedActualPrice(!checkedActualPrice)}/>}
                                  label="Add with actual price"/>
            </FormGroup>
            {checkedActualPrice === false ?
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