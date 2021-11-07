import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    cardGrid: {
        padding: '20px 0',
    },
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
   },
    footer:{
        padding: '20px 0'
    },
    page:{
        margin: '20px'
    }



}));

export default useStyles;