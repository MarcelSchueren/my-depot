import {Typography} from "@mui/material";
import useStyles from "../styling/useStyles";

export default function PlayPage(){

    const classes= useStyles()

    return(
        <div className={classes.page}>
            <Typography variant="h3" gutterBottom>PlayPage</Typography>
            <Typography variant="h5">Feature coming soon :)</Typography>
        </div>
    )
}