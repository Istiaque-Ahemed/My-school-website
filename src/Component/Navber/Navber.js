import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <Container>


      {/* <nav>
        <Link to="/"></Link> 
        <Link to="about">প্রচ্ছদ</Link>
      </nav> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Nav className="me-auto">
          <Link to="/"> প্রচ্ছদ</Link>

        </Nav>

      </Navbar>

    </Container>
  );
};

export default Navber;

// 