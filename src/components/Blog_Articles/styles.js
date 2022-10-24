import { makeStyles } from "@material-ui/core/styles";
import Colors from '../Colors';

const {redPrimary, redSecondary, withePrimary, witheSecondary, greySecondary} = Colors

const styleCard = makeStyles((theme) => ({
    // PanelArticlePrimary
    contenedorPrinc:{
        padding: '1%',
        maxWidth: '320px'
    },
    roots: {
        minWidth: 275,
        background: 'grey',
        alignContent: 'center',
    },
    buttonCardPrinc:{
        alignItems: 'center',
        alignSelf: 'flex-start',
        borderRadius: '28px',
        background: '#4bd129',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        height: '20px',
        justifyContent: 'center',
        minHeight: '28px',
        padding: '1px', 
        textAlign: 'center',
        width: '35%'
    },
    titleCardPrinc:{
        textAlign: 'justify', fontWeight: 'normal', color: '#fff'
    },
    nameUserPrinc:{
        height: 24, marginBlock: 'auto', marginLeft: '10px', color:'#fff'
    },
    divAvatar:{
        height: 24, marginBlock: 'auto', marginLeft: '10px'
    },
    textTruncate:{
        textAlign: 'justify', fontWeight: 'normal', color: '#fff', 
        display: '-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp: '2', overflow: 'hidden' 
    },
    imageCard:{
        width: '100%', height: 'auto' , marginBottom:'20px', maxWidth: '350px', 
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center'
    }
}));



export default styleCard
