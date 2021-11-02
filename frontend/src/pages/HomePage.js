import {Typography} from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";

export default function HomePage({stocks}) {

    return (
        <div>
            <Typography variant="h3">HomePage</Typography>
            {stocks.map(stock => {
                return <PortfolioItem stock={stock} key={stock.id}/>
            })}
        </div>
    )
}


