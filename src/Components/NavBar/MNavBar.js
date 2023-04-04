import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo01 from "../../img/logo01.svg";
import Hheader from "../Header/Hheader";

import "./navbar.css"

const MNavBar = () => {
  return (
      <Navbar className="bg-dark" sticky="top" style={{ borderBottom: "1px grey solid" }} expand="lg">
        <Container fluid  >
          <Navbar.Brand href="#" className="d-flex align-items-center px-5">
            <div className="LogoDiv">    
                      <img className="mlogo" src={logo01} alt="photo"  />
</div>
            <div className="LDiv">
            <h2 className="nlogo">Lawer Power</h2>
            <h6 className="ltitle">Maitre Moncef Habibi</h6>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="nUl" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nList"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="ntitle" href="#home">Home</Nav.Link>
              <Nav.Link  className="ntitle" href="#aboutus">About Us</Nav.Link>
              <Nav.Link  className="ntitle" href="#service">Services</Nav.Link>
              <Nav.Link  className="ntitle" href="#contact">Contact Us</Nav.Link>
             
            </Nav>
              <NavLink to="/login">
                <button className="loginBTN">Login</button> 
              </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};


export default MNavBar;
