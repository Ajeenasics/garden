import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../assets/css/GardnerLandingNav.css"
import profile from "../../assets/userprofile.png"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD

=======
>>>>>>> dc16d8c3ac48779be8c2479407378bd5b94753bb
 function GardnerLandingNav() {
  


  return (
    <>
       <Navbar expand="lg"  className='navbar fixed-top'>
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
<<<<<<< HEAD
            <Button className='logout_button' variant="light">Light</Button>
=======
            <Button variant="light">Light</Button>
>>>>>>> dc16d8c3ac48779be8c2479407378bd5b94753bb
            <Link to={"/gardnerprofileview"} className='nav-image' ><img className='profile-image' src={profile}></img></Link>     
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
 }
export default GardnerLandingNav;

