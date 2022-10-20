import React from 'react'
import Button from '@material-ui/core/Button';
import styleButton from './styles';

const ButtonPrimary = (props) => {
  const {buttonPrimary} = styleButton();
  return (
    <Button variant="contained" className={buttonPrimary} >
      {props.title}
      </Button>
    )
  }
  
const ButtonSecondary = (props) => {
  const classes = styleButton();
  return (
    <Button variant="contained" className={classes.buttonSecondary} >
    {props.title}
    </Button>
  )
}

const ButtonIcon = (props) => {
  const classes = styleButton();
  
  return(
    <Button variant="contained" className={classes.buttonPrimary} endIcon= {props.Icon}
    >
      {props.title}
    </Button>
  )
}

const ButtonCirclePrimary = (props) =>{
  const classes = styleButton();
  return(
    <Button variant="contained" className={classes.ButtonIcon}>
    {props.Icon}
    </Button>
  )
}

// const ButtonCircleSeccondary = (props) =>{
//   return(
//     <Button variant="contained" sx={{...estiloCircular, background: withe, color:'#000', "&:hover": {background: greySecondary}}}> 
//     {props.Icon}
//     </Button>
//   )
// }

export default {
  ButtonPrimary, 
  ButtonSecondary,
  ButtonIcon,
  ButtonCirclePrimary,
  // ButtonCircleSeccondary,
} 
