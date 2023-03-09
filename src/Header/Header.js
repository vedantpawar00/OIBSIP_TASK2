import React from 'react'
import logo from "../Pics/vlogo.png";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css';
import 'bootstrap/dist/css/bootstrap.css'

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Contents/Home';
import { Projects } from '../Contents/Projects';
import { Skills } from '../Contents/Skills';
import { Education } from '../Contents/Education';
// import { About } from '../Contents/About';
import { Contact } from '../Contents/Contact';

export const Header = () => {
  
    return (
      
        <div className='Container'> 
        <Navbar bg="secondary" expand="lg" >
          <Container fluid>
            <Navbar.Brand className='navbar' href="#"> <img className='logo' src={logo} alt="logo.."/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='navlink' href="#/Home">Home</Nav.Link>
                <Nav.Link className='navlink' href="#/Projects">Projects</Nav.Link>
                <Nav.Link className='navlink' href="#/Skills">Skills</Nav.Link>
                <Nav.Link className='navlink' href="#/Education">Education</Nav.Link>
                {/* <Nav.Link className='navlink' href="#/About">About me</Nav.Link> */}
                <Nav.Link className='navlink' href="#/Contact">Contacts</Nav.Link>

                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                {/* <Nav.Link href="#" disabled>
                  Link
                </Nav.Link> */}
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <HashRouter>
      <Routes>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/Projects' element={<Projects/>}/>
              <Route path='/Skills' element={<Skills/>}/>
              <Route path='/Education' element={<Education/>}/>
              {/* <Route path='/About' element={<About/>}/> */}
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='*' element={<Navigate to='/home'/>}/>

      </Routes>
    </HashRouter>

        </div>
      );

}
