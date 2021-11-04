import {Typography} from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";

export default function HomePage({activeDepot}) {

    if (!activeDepot) {
        return <div> Please chose an active depot </div>
    }

    return (
        <div>
            <Typography variant="h3">HomePage</Typography>
            {activeDepot.portfolioItems.map(stock => {
                return <PortfolioItem stock={stock} key={stock.id}/>
            })}
        </div>
    )
}


