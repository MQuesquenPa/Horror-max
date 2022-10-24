import React from 'react'
import PanelArticle from './PanelArticle'

const {PanelArticlePrimary, PanelArticleSeccundary,PanelArticleThird} = PanelArticle
const texto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const avatar = "https://img.lovepik.com/element/45006/1283.png_860.png";
const titulo = "Everything you ever need to know about Birds of Prey Movie Harley Quinn";
const subTitulo = "Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolo id sem, maecenas a venenatis enim quis portitor magna. eliam nec rhoncus neque. Sed quis ultices eros.curabitur";
const nameUser = "MATEO ROSAS";

export const AllCards = () => {
  return (
    <>
        <PanelArticlePrimary title={texto} nameUser={nameUser} avatar={avatar}/>
        <PanelArticleSeccundary title={titulo}  subtitulo={subTitulo} nameUser={nameUser}/>
        <PanelArticleThird title={texto} nameUser={nameUser} avatar={avatar}/>
    </>
  )
}