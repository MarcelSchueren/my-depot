import {Typography} from "@mui/material";
import useStyles from "../hooks/useStyles";

export default function EditDepotPage(){

    const classes= useStyles()

    return(
        <div className={classes.page}>
            <Typography variant="h3" gutterBottom>EditDepotPage</Typography>
            <Typography variant="h5">Feature coming soon :)</Typography>
        </div>
    )
}

