import {useParams} from "react-router-dom";
import useStyles from "../styling/useStyles";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";

export default function PortfolioItemDetailsPage({activePortfolioItem}) {
    const {id} = useParams()
    const classes = useStyles()

    function createData(nameOfValue, value, unit) {
        return {nameOfValue, value, unit};
    }

    const rowsOverview = [
        createData('Regular Market Price', activePortfolioItem.regularMarketPrice.toFixed(2), '€ / p'),
        createData('Bought at Price', activePortfolioItem.boughtAtPricePerShare.toFixed(2), '€ / p'),
        createData('Arithmetical absolute Gain per piece', (activePortfolioItem.regularMarketPrice - activePortfolioItem.boughtAtPricePerShare).toFixed(2), '€ / p'),
        createData('Quantity', activePortfolioItem.quantity, 'p.'),
        createData('Arithmetical absolute Gain', ((activePortfolioItem.regularMarketPrice - activePortfolioItem.boughtAtPricePerShare) * activePortfolioItem.quantity).toFixed(2), '€'),
    ];

    const rowsDetail = [
        createData('Day high', activePortfolioItem.regularMarketPrice.toFixed(2), '€ / p'),
        createData('Day low', activePortfolioItem.boughtAtPricePerShare.toFixed(2), '€ / p'),
        createData('Year high', (activePortfolioItem.regularMarketPrice - activePortfolioItem.boughtAtPricePerShare).toFixed(2), '€ / p'),
        createData('Year low', activePortfolioItem.quantity, '€ / p'),
        createData('Dividend', ((activePortfolioItem.regularMarketPrice - activePortfolioItem.boughtAtPricePerShare) * activePortfolioItem.quantity).toFixed(2), '€ / p'),
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
                            <TableCell>Details</TableCell>
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