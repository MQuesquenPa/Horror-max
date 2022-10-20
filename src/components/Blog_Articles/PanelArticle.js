import React from 'react'

import {Card}  from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

import Buttons from '../Buttons/ButtonSimple';
import Colors from '../Colors';

const {greenPrimary, greenSecondary} = Colors
const {ButtonPrimary} =  Buttons

const PanelArticlePrimary = (props) => {
  return (
    <>
    <Card sx={{ maxWidth: 345, height: 300}}>
        <CardContent>
            <ButtonPrimary title='GAMMING' colorPrinc = {greenPrimary} colorSec = {greenSecondary}/>
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
    return (
      <div>PanelArticle 2</div>
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