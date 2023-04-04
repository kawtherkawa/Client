import React from "react";
import Card from "react-bootstrap/Card";
import "./service.css";

import { BsFillBarChartLineFill, BsFillHouseHeartFill , BsCarFront} from 'react-icons/bs';
const Service = () => {
  return (
    <section id="service">
      <div>
        <h2 className="sh2" >Our Practice Areas</h2>
        <h3 className="sh3"> OUR FEATURED SERVICES</h3>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <Card className="Scard" style={{ width: "20rem" }}>
        <div className="Sdiv">
         <span> <BsFillHouseHeartFill className="Sicon"/></span> 
        </div>
          <Card.Body>
            <Card.Title>FAMILY LAW SERVICE</Card.Title>
            <Card.Text>
              Phasellus sit amet tristique ligula. Donec iaculis leo suscipit
              ultricies Interdum esuada fames ant Interdum esuada infaucibus.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="Scard" style={{ width: "20rem" }}>
          <div className="Sdiv">
            <span><BsFillBarChartLineFill className="Sicon"/></span>
          </div>
          <Card.Body>
            <Card.Title>BUSINESS LAW SERVICE</Card.Title>
            <Card.Text>
              Phasellus sit amet tristique ligula. Donec iaculis leo suscipit
              ultricies Interdum esuada fames ant Interdum esuada infaucibus.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="Scard" style={{ width: "20rem" }}>
          <div className="Sdiv">

          <span>  <BsCarFront className="Sicon"/></span>
          </div>
          <Card.Body>
            <Card.Title>ROAD ACCIDENT SERVICE</Card.Title>
            <Card.Text>
              Phasellus sit amet tristique ligula. Donec iaculis leo suscipit
              ultricies Interdum esuada fames ant Interdum esuada infaucibus.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default Service;
