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
        <div style={{background: 'red', padding: '0%', marginLeft: '20px'}}>{/*AQUI VA LA SEGUNDA PARTE*/}
            <div style={{display: 'flex', flexDirection: 'row'}}>{/*AQUI VA LETRAS*/}
                <p style={{marginRight: '30px', fontSize: '13px'}} >Terms of Use</p>
                <p style={{marginRight: '30px', fontSize: '13px'}} >Privacy Policy</p>
                <p style={{marginRight: '30px', fontSize: '13px'}} >Cookies Policy</p>
                <p style={{marginRight: '30px', fontSize: '13px'}} >|</p>
                <p style={{marginRight: '30px', fontSize: '13px'}} >Do not sell my information</p>
            </div>
            <div>{/*AQUI VA ICONOS REDES SOCIALES*/}
                <img style={{maxWidth: '220px', maxHeight:'26px'}} src='https://www.nicepng.com/png/full/321-3211139_facebook-logo-icons-facebook-round-png.png' alt='logo-Fb'/>
            </div>
        </div>  
    </div>
  )
}

export default Footer
