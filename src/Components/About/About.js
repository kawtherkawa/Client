import React from "react";
import photoabout from "../../img/aboutus.jpg";
import Pstatues from "../../img/statue.jpg";
import signature from "../../img/sighnature.jpg";
import  './about.css'
const About = () => {
  return (
    <section id="aboutus" className="d-flex flex-row p-5">
      <img src={photoabout} alt="about" />
      <div className=" Adiv">
        <h3>Working Since 2000</h3>
        <h2>OUR MISSION AND VISION</h2>
        <p>
          Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios
          Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit
          ametion consectetur elit. Vesti bulum nec odio ipsum.<br/>
          <br/> Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.{" "}
        </p>
      <img className="mt-4" src={signature} alt="statues" />
        
      </div>
      <img className="" src={Pstatues} alt="statues" />

      
    </section>
  );
};

export default About;
