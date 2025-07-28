import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Footer from "./Footer";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim() !== "") {
      navigate(`/movie?keyword=${keyword}`);
      setKeyword("");
    }
  };
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="/">Movie 306</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" id="navbar-toggler"/>
          <Navbar.Collapse  id="navbarScroll" >
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movie">Movies</Nav.Link>
              <Nav.Link as={Link} to="/mypage">My Page</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
            <Form className="d-flex me-3" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search Movie"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AppLayout;
