import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import Buttons from '../Buttons/ButtonSimple';
import Colors from '../Colors';
import { Box, makeStyles } from '@material-ui/core';
import styleCard from './styles';

const {greenPrimary, greenSecondary} = Colors
const {ButtonPrimary} =  Buttons

const {} = styleCard

const useStyles = makeStyles({
  roots: {
    minWidth: 275,
    background: 'grey',
    alignContent: 'center',
    
  },
  boton:{
    background: 'green',
    color: '#fff',
    borderRadius: '32%',
    textAlign: 'center',
    width: '17%',
    padding: '1px', 
    cursor: 'pointer'
  },
  contents:{
    display: 'flex',
    flexDirection: 'row',
  },
  contents2:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    fontFamily: 'Roboto',
    background: 'red'
  },
  boton2:{
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: '28px',
    background: '#3bb21e',
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
  cuadroizq:{
    background: 'blue'
  }
});


const PanelArticlePrimary = (props) => {
  const {roots, buttonCardPrinc, titleCardPrinc, nameUserPrinc} = styleCard();
  return (
    <>
    <div style={{padding: '1%', maxWidth: '320px'}}>
      <Card className={roots}>
          <CardContent >
            <div style={{marginBottom: '120px'}}>
              <div className={buttonCardPrinc}>
                <p>GAMING</p>
              </div>
              <h4 className={titleCardPrinc}>{props.title}</h4>
            </div>
            <div>
              <div style={{display: 'flex',  flexDirection: 'row'}}>
                  <Avatar style={{ width: 24, height: 24 }} alt={props.nameUser} src={props.avatar} />                           
                  <p className={nameUserPrinc}>{props.nameUser}</p>
              </div>
            </div>
          </CardContent>
      </Card>
    </div>
    </>
  )
}

const PanelArticleSeccundary = (props) => {
  const {imageCard, buttonCardPrinc, titleCardPrinc, nameUserPrinc, divAvatar, textTruncate} = styleCard();
    const classes = useStyles();
  return (
    <>
      <div style={{padding: '1%', maxWidth: '550px', gridTemplateColumns: '50% auto'}}>
        <Card>
            <div style={{background:'#191919', display: 'flex', flexDirection:'row'}}>
              {/* <CardContent style={{ padding:'0%', marginLeft:'-180px'}}> */}
              <CardContent style={{ padding:'0%'}}>

              <div>
              {/* <img style={{margin: 'auto', display:'block'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnXgpptQjk0aPjk4ZaYbQhedjrXr_OoPkWg&usqp=CAU"/> */}
              <img className={imageCard} style={{height: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnXgpptQjk0aPjk4ZaYbQhedjrXr_OoPkWg&usqp=CAU"/>
              </div>
              </CardContent>
              <CardContent>
                <div style={{background:'red', maxWidth:'400px', maxHeight:'400px'}}>
                  <div className={classes.contents2}>
                    <div className={classes.boton2}>
                      <h6>GAMING</h6>
                    </div>
                  </div>
                  <p style={{ textAlign: 'justify' }}>{props.title}</p>
                  <p className={textTruncate}>{props.subtitulo}</p>
                <div style={{display: 'flex',  flexDirection: 'row'}}>
                    <Avatar style={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://img.lovepik.com/element/45006/1283.png_860.png" />
                    <p className={divAvatar}>{props.nameUser}</p>
                </div>
                </div>
              </CardContent>
            </div>
        </Card>
      </div>
      </>
    )
}

const PanelArticleThird = (props) => {
  const classes = useStyles();
  const {imageCard, buttonCardPrinc, titleCardPrinc, nameUserPrinc, divAvatar, textTruncate} = styleCard();
    
  return (
      <>
      <div style={{padding: '1%', maxWidth: '320px'}}>
        <Card style={{background: '#020912'}}>
            <div>
              {/* <img style={{margin: 'auto', display:'block'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnXgpptQjk0aPjk4ZaYbQhedjrXr_OoPkWg&usqp=CAU"/> */}
              <img className={imageCard} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnXgpptQjk0aPjk4ZaYbQhedjrXr_OoPkWg&usqp=CAU"/>
            </div>
            <div style={{padding: '5%'}}>
              <div className={buttonCardPrinc}>
                <p>GAMING</p>
              </div>
                {/* <p className={titleCardPrinc}>{props.title}</p> */}
                <p className={textTruncate}>{props.title}</p>
            </div>
            <div style={{padding: '5%'}}>
              <div style={{display: 'flex',  flexDirection: 'row'}}>
                  <Avatar style={{ width: 24, height: 24 }} alt={props.nameUser} src={props.avatar} />                           
                  <p className={nameUserPrinc}>{props.nameUser}</p>
              </div>
            </div>
        </Card>
      </div>
      </>
    )
}

export default {
    PanelArticlePrimary,
    PanelArticleSeccundary,
    PanelArticleThird
};