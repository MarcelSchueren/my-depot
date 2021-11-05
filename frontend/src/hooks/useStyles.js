import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    cardGrid: {
        padding: '20px 0',

    },
    card: {
        display: 'flex',
        flexDirection: 'column',
   },
    footer:{
        padding: '20px 0'
    }
}));

export default useStyles;