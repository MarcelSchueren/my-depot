import {Typography} from "@mui/material";
import Portfolio from "../components/Portfolio";

export default function OpenDepotPage({depots, openDepot}){
    return(
        <div>
            <Typography variant="h3">OpenDepotPage</Typography>
            {depots.map(depot => {
                return <Portfolio depot={depot} key={depot.id} openDepot={openDepot}/>
            })}
        </div>
    )
}

