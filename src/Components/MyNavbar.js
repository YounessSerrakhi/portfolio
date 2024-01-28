import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

export default function MyNavbar() {
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setDisplay('flex');
      } else {
        setDisplay('none');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="white" expand="lg" variant="light" fixed="top" className="shadow py-lg-0 px-4 px-lg-5" style={{ display: `${display}` }}>
      <Container>
        <Navbar.Brand href="" className="d-block d-lg-none">
          <ScrollLink to="home" spy={true} smooth={true} duration={500} offset={-50} className="nav-link active">
            <h1 className="text-primary fw-bold m-0">SERRAKHI</h1>
          </ScrollLink> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse" className="justify-content-between py-4 py-lg-0">
          <Nav className="ms-auto py-0">
            <ScrollLink to="home" spy={true} smooth={true} duration={500} offset={-50} className="nav-link">Home</ScrollLink>
            <ScrollLink to="skils" spy={true} smooth={true} duration={500} offset={-50} className="nav-link">Skills</ScrollLink>
            <ScrollLink to="formations" spy={true} smooth={true} duration={500} offset={-50} className="nav-link">Educations</ScrollLink>
          </Nav>
          <ScrollLink to="home" spy={true} smooth={true} duration={500} offset={-50}className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
            <h1 className="text-primary fw-bold m-0">SERRAKHI</h1>
          </ScrollLink>
          <Nav className="me-auto py-0">
            <ScrollLink to="certif" spy={true} smooth={true} duration={500} offset={-50} className="nav-link">Certifications</ScrollLink>
            <ScrollLink to="project" spy={true} smooth={true} duration={500} offset={-50} className="nav-link">Projects</ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} duration={500} offset={-50} className="nav-link">Contact</ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
