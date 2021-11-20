import {AppBar,  Toolbar, Typography} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import useStyles from "../styling/useStyles";

export default function Header() {

    const classes = useStyles()

    return (
        <header>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
            <AppBar position="relative">
                <Toolbar>
                    <AccountBalanceIcon fontSize="large"/>
                    <Typography variant="h4" className={classes.appbarElement}>My Depot</Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}

