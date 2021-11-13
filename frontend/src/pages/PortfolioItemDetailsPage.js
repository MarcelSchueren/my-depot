import useStyles from "../styling/useStyles";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";

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
            <PortfolioItem stock={activePortfolioItem} openPortfolioItem={() => {
            }} short={true}/>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Account Overview</TableCell>
                            <TableCell align="right">Value</TableCell>
                            <TableCell align="right">Unit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsOverview.map((row) => (
                            <TableRow
                                key={row.nameOfValue}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.nameOfValue}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <p></p>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Market Details</TableCell>
                            <TableCell align="right">Value</TableCell>
                            <TableCell align="right">Unit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsDetail.map((row) => (
                            <TableRow
                                key={row.nameOfValue}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.nameOfValue}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}