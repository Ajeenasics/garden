import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../assets/css/GardnerLandingNav.css"
import profile from "../../assets/userprofile.png"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
 function GardnerLandingNav() {
  


  return (
    <div>
       <Navbar expand="lg"  className='navbar'>
      <Container fluid>
        <Navbar.Brand  href="#"><h3 className='navheading'>Gardener</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            className=" me-auto-flex-end  my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Gardening Details</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Chat</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <Button variant="light">Light</Button>
            <Link to={"/gardnerprofileview"} className='nav-image' ><img className='profile-image' src={profile}></img></Link>     
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
 }
export default GardnerLandingNav;

