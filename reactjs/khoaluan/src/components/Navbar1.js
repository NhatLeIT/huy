import React from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Dropdown from "./Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Navbar1() {
  return (
    <>
      <Navbar style={{ borderBottom: "3px solid #ccc" }}>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            {/* logo */}
            <Navbar.Brand
              href="#"
              style={{ color: "#ff0000", fontWeight: "bold" }}
            >
              FOOD.
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              navbarScroll
            >
              {/* Trang chủ */}
              <Link to="/" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action1" style={{ marginRight: "30px" }}>
                  Trang chủ
                </Nav.Link>
              </Link>

              {/* Khám phá */}
              <Link to="/kham-pha" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action1" style={{ marginRight: "30px" }}>
                  Khám phá
                </Nav.Link>
              </Link>

              {/* Địa điểm */}
              <Nav.Link href="#action1" style={{ marginRight: "30px" }}>
                Địa điểm
              </Nav.Link>

              {/* Ăn gì */}
              <Nav.Link href="#action1" style={{ marginRight: "30px" }}>
                Ăn gì
              </Nav.Link>

              {/* Blog */}
              <Nav.Link href="#action2" style={{ marginRight: "50px" }}>
                Blog
              </Nav.Link>
              <NavDropdown
                title="Link"
                id="navbarScrollingDropdown"
                style={{ marginRight: "50px" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
