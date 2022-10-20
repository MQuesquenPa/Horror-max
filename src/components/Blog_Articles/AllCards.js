import React from 'react'
import PanelArticle from './PanelArticle'

const {PanelArticlePrimary} = PanelArticle
const texto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

export const AllCards = () => {
  return (
    <>
        <PanelArticlePrimary title = {texto} nameUser={"MARTIN"}/>
    </>
  )
}