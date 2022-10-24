import React from 'react'

const Footer = () => {
  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', margin: '0 20px'}}> {/*AQUI VA LA PRIMERA PARTE*/}
            <img style={{maxWidth: '220px', maxHeight: '90px'}}  src='https://admin.horrormax.com/uploads/settings/SV-2020-09-15-19-49-03-a47533414ee2d2407610882ea27059042a4f5917.png' alt="Logo"  />
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{marginRight: '30px', fontSize: '15px'}}>ABOUT US</p>
                <p style={{marginRight: '30px', fontSize: '15px'}}>MOVIES COLLECTION</p>
                <p style={{marginRight: '30px', fontSize: '15px'}}>BLOG</p>
                <p style={{marginRight: '30px', fontSize: '15px'}}>CONTACT US</p>
                <p style={{marginRight: '30px', fontSize: '15px'}}>PARNERT PROGRAM</p>
                <p style={{marginRight: '30px', fontSize: '15px'}}>SUPORT</p>
            </div>
        </div>
        <div style={{background: 'red'}}>{/*AQUI VA LA SEGUNDA PARTE*/}
            <div>{/*AQUI VA LETRAS*/}
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
                <p>|</p>
                <p>Do not sell my information</p>
            </div>
            <div>{/*AQUI VA ICONOS REDES SOCIALES*/}

            </div>
        </div>  
    </div>
  )
}

export default Footer
