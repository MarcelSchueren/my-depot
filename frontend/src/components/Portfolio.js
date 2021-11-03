import {Button, Card, CardActions, Typography} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import {useHistory} from "react-router-dom";

export default function Portfolio({depot, openDepot}) {

    let history = useHistory()

    const handleClick=()=>{
        openDepot(depot)
        history.push("/")
    }

    return (
        <Card variant="outlined" align="center">
            <CardContent>
                <Typography variant="h4">{depot.name}</Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small" onClick={handleClick}>Open</Button>
            </CardActions>
        </Card>
    )}
