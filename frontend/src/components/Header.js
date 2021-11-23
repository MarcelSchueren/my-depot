import {AppBar, Toolbar} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../styling/myDepot.png';
import {useHistory} from "react-router-dom";

export default function Header() {
    const history = useHistory()

    return (
        <header>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
            <AppBar position="relative">
                <Toolbar>
                    {/*<AccountBalanceIcon fontSize="large"/>*/}
                    {/*<Typography variant="h4" sx={{pl: 1}}> My Depot </Typography>*/}
                    <img width="50%" src={logo} alt="Logo My Depot"/>
                    <div style={{display : 'flex', width: '50%', justifyContent: 'flex-end'}}>
                    <LogoutIcon onClick={()=>history.push('/login')}/>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}

