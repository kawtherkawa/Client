import React from 'react'
//import MNavBar from '../NavBar/MNavBar'

import './header.css'

const Hheader = () => {
  return (
    <section id='home' className='header' style={{backgroundImage : `url("https://img.freepik.com/photos-gratuite/nature-morte-balance-justice_23-2149776040.jpg")` ,  backgroundRepeat : "no-repeat" , backgroundSize : "cover" , backgroundPosition: "right 35% bottom 15%"  }}>
        <div className='divheader'>
      <h1>Equql.  Justice. Under. Law</h1>
      <p>Lorem ipsum  in dapibus in, consequat sed nunc. 
         eu justo eget blandit. Praesent feugiat eget diam 
        
            Donec semper quam a lacus congue, sit amet malesuada felis venenatis. Fusce fringilla, 
            velit non ornare aliquet, dolor ligula tempus massa, quis auctor velit ipsum vel est.</p>
            </div>

    </section>
  )
}

export default Hheader