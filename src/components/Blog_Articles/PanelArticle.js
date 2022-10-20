import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import Buttons from '../Buttons/ButtonSimple';
import Colors from '../Colors';
import { makeStyles } from '@material-ui/core';

const {greenPrimary, greenSecondary} = Colors
const {ButtonPrimary} =  Buttons

const useStyles = makeStyles({
  roots: {
    minWidth: 275,
    // background: 'red',
    maxHeight:750
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
    height: '100%'
  },
  boton2:{
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: '28px',
    background: 'green',
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
});


const PanelArticlePrimary = (props) => {
  const classes = useStyles();
  
  return (
    <>
    <Card className={classes.roots}>
        <CardContent>
            
            <div className={classes.boton}>
                <p >GAMING</p>
            </div>
            <p style={{ textAlign: 'justify' }}>{props.title}</p>
            {/* <p>Go and check out the new update for Assasin's Creed</p> */}
            <div style={{display: 'flex',  flexDirection: 'row'}}>
                <Avatar style={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://img.lovepik.com/element/45006/1283.png_860.png" />
                <p style={{height: 24, marginBlock: 'auto', marginLeft: '10px'}}>{props.nameUser}</p>
            </div>
        </CardContent>
    </Card>
    </>
  )
}

const PanelArticleSeccundary = (props) => {
  const classes = useStyles();
    
  return (
      <>
        <div style={{padding: '5%', maxWidth: '650px'}}>
          
          <Card className={classes.roots}>
          <div className={classes.contents}>
            <CardContent>
              <h6>Lorem ssaduhfo osudhoaf afouhfoas osahfo soaifhsao asfouihaf nasfofh afohasuif saoffhaso afoihaopif obfabfoisa buofasbf asoFbh</h6>
            </CardContent>

            <CardContent>
              <div className={classes.contents2}>
                <div className={classes.boton2}>
                    <h6>GAMING</h6>
                </div>
                {/* <p style={{ textAlign: 'justify' }}>{props.title}</p> */}
                <p style={{ textAlign: 'justify' }}>este es un titulo largo para al tarjeta Lorem ssaduhfo osudhoaf afouhfoas osahfo soaifhsao asfouihaf nasfofh afohasuif saoffhaso afoihaopif obfabfoisa buofasbf asoFbh</p>

                <p>SUB-TITULO</p>
                <div style={{display: 'flex',  flexDirection: 'row'}}>
                    <Avatar style={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://img.lovepik.com/element/45006/1283.png_860.png" />
                    <p style={{height: 24, marginBlock: 'auto', marginLeft: '10px'}}>props.nameUser</p>
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
    return (
      <div>PanelArticle 3</div>
    )
}

export default {
    PanelArticlePrimary,
    PanelArticleSeccundary,
    PanelArticleThird
};