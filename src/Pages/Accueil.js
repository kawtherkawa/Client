import React from 'react'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Hheader from '../Components/Header/Hheader'
//import Hheader from '../Components/Header/Hheader'
import MNavBar from '../Components/NavBar/MNavBar'
import Service from '../Components/Service/Service'
import './Accueil.css'


const Accueil = () => {
  
  return (
    <div>
    <MNavBar/>
    <Hheader/>
 <About/>
 <Service/>
 <Contact/>
 <Footer/>
    </div>
  )
}

export default Accueil