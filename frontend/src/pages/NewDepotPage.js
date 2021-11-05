import {Typography} from "@mui/material";
import useStyles from "../hooks/useStyles";

export default function NewDepotPage(){

    const classes= useStyles()

    return(
        <div className={classes.page}>
            <Typography variant="h3" gutterBottom>NewDepotPage</Typography>
            <Typography variant="h5">Feature coming soon :)</Typography>
        </div>
    )
}

