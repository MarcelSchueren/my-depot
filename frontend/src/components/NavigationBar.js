import {useHistory} from 'react-router-dom'
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import GamesIcon from '@mui/icons-material/Games';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";
import useStyles from "../styling/useStyles";

export default function NavigationBar() {

    const classes = useStyles()
    const [value, setValue] = useState('');
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(newValue);
    };

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation className={classes.bottomNavigation} value={value} onChange={handleChange} >
                <BottomNavigationAction
                    label="Actual"
                    value="/"
                    icon={<HomeIcon/>}
                />
                <BottomNavigationAction
                    label="New"
                    value="/new"
                    icon={<AddBoxIcon/>}
                />
                <BottomNavigationAction
                    label="Edit"
                    value="/edit"
                    icon={<EditIcon/>}
                />
                <BottomNavigationAction
                    label="Open"
                    value="/open"
                    icon={<FolderIcon/>}/>

                <BottomNavigationAction
                    label="Play"
                    value="/play"
                    icon={<GamesIcon/>}/>
            </BottomNavigation>
        </Paper>
    );
}

