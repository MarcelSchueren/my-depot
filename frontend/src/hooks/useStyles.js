import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    cardGrid: {
        padding: '20px 10px',

    },
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
   },
    footer:{
        padding: '20px 0'
    }
}));

export default useStyles;