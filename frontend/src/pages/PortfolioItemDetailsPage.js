import useStyles from "../styling/useStyles";
import PortfolioItem from "../components/PortfolioItem";
import TableContainerIndiv from "../components/TableContainerIndiv";

export default function PortfolioItemDetailsPage({activePortfolioItem}) {
    const classes = useStyles()

    function createData(nameOfValue, value, unit) {
        return {nameOfValue, value, unit};
    }

    const rowsOverview = [
        createData('Bought at Price', activePortfolioItem.boughtAtPricePerShare.toFixed(2), '€ / p'),
        createData('Quantity', activePortfolioItem.quantity, 'p.'),
        createData('arithm. abs. Gain (/p)', (activePortfolioItem.regularMarketPrice - activePortfolioItem.boughtAtPricePerShare).toFixed(2), '€ / p'),
        createData('arithm. abs. Gain', ((activePortfolioItem.regularMarketPrice - activePortfolioItem.boughtAtPricePerShare) * activePortfolioItem.quantity).toFixed(2), '€'),
    ];

    const rowsDetail = [
        createData('Regular Market Price', activePortfolioItem.regularMarketPrice.toFixed(2), '€ / p'),
        createData('Day high', activePortfolioItem.dayHigh.toFixed(2), '€ / p'),
        createData('Day low', activePortfolioItem.dayLow.toFixed(2), '€ / p'),
        createData('Year high', activePortfolioItem.yearHigh.toFixed(2), '€ / p'),
        createData('Year low', activePortfolioItem.yearLow.toFixed(2), '€ / p'),
        createData('Dividend', activePortfolioItem.dividend.toFixed(2), '% pa'),
    ];

    return (
        <div className={classes.page}>
            <PortfolioItem stock={activePortfolioItem} openPortfolioItem={()=>{}} short={true}/>
            <p> </p>
            <TableContainerIndiv rows={rowsOverview} title="Depot"/>
            <p> </p>
            <TableContainerIndiv rows={rowsDetail} title="Market"/>
        </div>
    )
}