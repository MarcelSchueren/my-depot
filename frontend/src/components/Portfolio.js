import {Button, Card, CardActions, Typography} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import {useHistory} from "react-router-dom";
import useStyles from "../hooks/useStyles";

export default function Portfolio({depot, openDepot}) {

    const classes = useStyles()
    const history = useHistory()

    const handleClick=()=>{
        openDepot(depot)
        history.push("/")
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h4">{depot.name}</Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small" onClick={handleClick}>Open</Button>
            </CardActions>
        </Card>
    )}
