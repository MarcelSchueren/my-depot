import {Typography} from "@mui/material";
import Portfolio from "../components/Portfolio";

export default function OpenDepotPage({depots, openDepot}){

    if (!depots) {
        return <div> No active depots! Create one with "new"</div>
    }

    return(
        <div>
            <Typography variant="h3">OpenDepotPage</Typography>
            {depots.map(depot => {
                return <Portfolio depot={depot} key={depot.id} openDepot={openDepot}/>
            })}
        </div>
    )
}

