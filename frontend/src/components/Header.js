import {AppBar,  Toolbar, Typography} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Header() {
    return (
        <header>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
            <AppBar position="relative">
                <Toolbar>
                    <AccountBalanceIcon fontSize="large"/>
                    <Typography variant="h4">My Depot</Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}

