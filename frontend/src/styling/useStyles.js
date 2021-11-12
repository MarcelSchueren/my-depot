import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        padding: '20px 0',
    },

     card: {
        backgroundColor: theme.palette.background.default,
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
    },

    cardSymbol: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
        gridColumnStart: '1',
        gridColumnEnd: '3',
        gridRowStart: '1',
        gridRowEnd: '2',
        display: 'inline',
        padding: '10px'
    },

    cardPercentageChange: {
        backgroundColor: theme.palette.primary.light,
        gridColumnStart: '3',
        gridColumnEnd: '4',
        gridRowStart: '1',
        gridRowEnd: '2',
        display: 'inline',
        textAlign: 'right',
        padding: '10px'
    },

    cardDisplayName: {
        gridColumnStart: '1',
        gridColumnEnd: '3',
        gridRowStart: '2',
        gridRowEnd: '3',
        padding: '10px'
    },

    cardQuantity: {
        gridColumnStart: '1',
        gridColumnEnd: '3',
        gridRowStart: '3',
        gridRowEnd: '4',
        padding: '10px'
    },

    cardSum: {
        gridColumnStart: '3',
        gridColumnEnd: '4',
        gridRowStart: '3',
        gridRowEnd: '4',
        textAlign: 'right',
        padding: '10px'
    },

    cardDepotName: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
        gridColumnStart: '1',
        gridColumnEnd: '3',
        gridRowStart: '1',
        gridRowEnd: '2',
        display: 'inline',
        padding: '10px'
    },

    cardValueOfPortfolio: {
        gridColumnStart: '3',
        gridColumnEnd: '4',
        gridRowStart: '3',
        gridRowEnd: '4',
        padding: '10px',
        textAlign: 'right'
    },

    cardPortfolioButton: {
        gridColumnStart: '2',
        gridColumnEnd: '3',
        gridRowStart: '3',
        gridRowEnd: '4',
    },

    cardPortfolioPercentageChange: {
        backgroundColor: theme.palette.primary.light,
        gridColumnStart: '3',
        gridColumnEnd: '4',
        gridRowStart: '1',
        gridRowEnd: '2',
        display: 'inline',
        textAlign: 'right',
        padding: '10px'
    },

    cardPortfolioAbsoluteChange: {
        backgroundColor: theme.palette.background.default,
        gridColumnStart: '1',
        gridColumnEnd: '2',
        gridRowStart: '3',
        gridRowEnd: '4',
        display: 'inline',
        padding: '10px'
    },

    newPortfolioPage: {
        height: '100%',
        width: '100%',
        backgroundColor: "theme.palette.background.paper",
        color: theme.palette.text.primary,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        // justifyContent: 'space-between',
        // gridTemplateColumns: '1fr 1fr',
        // gridTemplateRows: '1fr 1fr 1fr 1fr',
    },

    // namePortfolio: {
    //     gridColumnStart: '1',
    //     gridColumnEnd: '2',
    //     gridRowStart: '1',
    //     gridRowEnd: '2',
    // },
    //
    // addStock: {
    //     gridColumnStart: '1',
    //     gridColumnEnd: '2',
    //     gridRowStart: '2',
    //     gridRowEnd: '3',
    // },
    //
    // addPortfolioItem: {
    //     gridColumnStart: '3',
    //     gridColumnEnd: '2',
    //     gridRowStart: '3',
    //     gridRowEnd: '4',
    // },
    //
    // newPortfolioButton: {
    //     gridColumnStart: '2',
    //     gridColumnEnd: '3',
    //     gridRowStart: '1',
    //     gridRowEnd: '2',
    // },
    //
    // portfolioItemsGridPlace: {
    //     gridColumnStart: '1',
    //     gridColumnEnd: '3',
    //     gridRowStart: '4',
    //     gridRowEnd: '5',
    // },

    footer: {
        // padding: '20px 0'
    },

    page: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: '20px'
    }
}));

export default useStyles;