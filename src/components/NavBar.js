import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.style.display = "flex";
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.style.display = "none";
  };

  const handleSearch = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-dark bg-gradient">
        <Container className="mWidth">
          <Navbar.Brand href="#home">
            <img className="ml-30" src="/logo.png" alt="Logo" width="200px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-2 fs-7 fw-bold">
              <NavLink to="/home" className="active">
                Home
              </NavLink>
              <NavLink to="/about" className="active">
                About
              </NavLink>
              <NavLink to="/bookacourt" className="active">
                Book a Court
              </NavLink>
              <NavLink to="/coaching" className="active">
                Coaching
              </NavLink>
              <NavLink to="/leagues" className="active">
                Leagues
              </NavLink>
              <NavLink to="/contactus" className="active">
                Contact Us
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Type something.."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="success" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have searched for: <strong>{searchQuery}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
