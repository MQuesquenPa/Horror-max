import React from 'react'
import Buttons from './ButtonSimple';
import DeleteIcon from '@material-ui/icons/Delete';

const {ButtonIcon, ButtonPrimary, ButtonSecondary, ButtonCirclePrimary, ButtonCircleSeccondary} =  Buttons



export const AllButtons = () => {
  return (
    <>
        <ButtonPrimary title = "TRY 7 DAYS FREE" />
        <br /><br />
        <ButtonIcon title = "Watch more"  Icon={<DeleteIcon />} />
        <br /><br />
        <ButtonSecondary title = "TRY 7 DAYS FREE" />
        <br /><br />
        <ButtonCirclePrimary  Icon={<DeleteIcon />} />
        <br /><br />
        {/* <ButtonCircleSeccondary Icon={<DeleteIcon />} />
        <br /><br /> */}
    </>
    // <div>AllButtons</div>
  )
}
