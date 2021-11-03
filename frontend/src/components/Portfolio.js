import {Button, Card, CardActions, Typography} from "@mui/material";
import CardContent from '@mui/material/CardContent';

export default function Portfolio({depot, openDepot}) {

    return (
        <Card variant="outlined" align="center">
            <CardContent>
                <Typography variant="h4">{depot.name}</Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small" onClick={()=>openDepot(depot)}>Open</Button>
            </CardActions>
        </Card>
    )}
