import React from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../JS/Actions/user";
import "./topbar.css"
const TopBar = () => {
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  const dispatch= useDispatch()
  const navigate=useNavigate()
  return (
    <div>
      <Navbar  expand="lg">
       <Container>
          <Navbar.Brand href="#home">Laywer Power</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " className="d-flex  ">

              <Button variant="outline-success" onClick={()=>dispatch(logout(navigate))}>  الخروج </Button>
              
        
            <Nav className="me-auto">
            <Nav.Link >
                <NavLink className="nav-link" to="/archive">الارشيف</NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-link" to="/contrat">العقود</NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-link" to="/tribunal">المحاكم</NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-link" to="/jalassat">الجلسات</NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-link" to="/cases">القضايا</NavLink>
                </Nav.Link>
             

              <Nav.Link>
                <NavLink className="nav-link" to="/calendar">المواعيد</NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-link" to="/client">الحرفاء</NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-link" to="/register">المستخدمين</NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-link" to="/dashbord">الصفحة الرئيسية</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
