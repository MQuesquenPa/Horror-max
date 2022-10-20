import { makeStyles } from "@material-ui/core/styles";
import Colors from '../Colors';

const {redPrimary, redSecondary, withePrimary, witheSecondary, greySecondary} = Colors

const styleButton = makeStyles((theme) => ({
  buttonPrimary: {
    color:withePrimary ,background: redPrimary, "&:hover": {background: redSecondary}
  },
  buttonSecondary:{
    background: withePrimary, "&:hover": {background: witheSecondary}
  },
  ButtonIcon:{
    borderRadius: '100%',  padding:'6px 0px', minWidth:'35px',color:withePrimary ,background: redPrimary, "&:hover": {background: redSecondary}
  }
}));



export default styleButton
