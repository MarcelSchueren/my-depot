import {useHistory} from 'react-router-dom'
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import GamesIcon from '@mui/icons-material/Games';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";

export default function NavigationBar() {


    const [value, setValue] = useState('recents');
    let history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(newValue);
    };

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Depot"
                    value="/"
                    icon={<HomeIcon/>}
                />
                <BottomNavigationAction
                    label="New Depot"
                    value="/new"
                    icon={<AddBoxIcon/>}
                />
                <BottomNavigationAction
                    label="Edit Depot"
                    value="/edit"
                    icon={<EditIcon/>}
                />
                <BottomNavigationAction
                    label="Switch Depot"
                    value="/switch"
                    icon={<FolderIcon/>}/>

                <BottomNavigationAction
                    label="Play"
                    value="/play"
                    icon={<GamesIcon/>}/>
            </BottomNavigation>
        </Paper>
    );
}

