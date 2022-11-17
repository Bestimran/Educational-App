import React, { useContext } from "react";
import './Header.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container className="navbar">
        <Link to='/' className=" text-info fw-bold fs-2">
          Edu Expert
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" header m-auto ">
            <Link to='/'>Home</Link>
            <Link to='/course'>Courses</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            {user?.displayName}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
