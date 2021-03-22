import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./StickyNav.module.scss";
import { scroller } from "react-scroll";
class NavBar extends Component {
  smoothScroll = (href) => {
    scroller.scrollTo(href, {
      smooth: true,
      offset: -65,
      duration: 500,
    });
  };
  render() {
    return (
      <Navbar bg="primary" variant="light" expand="lg" fixed="top">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ml-auto"
          bg="primary"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="py-2 ml-auto">
            <Container>
              <Nav className="ml-auto ">
                <Nav.Link
                  href=""
                  className={[styles.nav__link, "ml-auto mr-2"].join(" ")}
                  onClick={() => {
                    this.smoothScroll("home");
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href=""
                  className={[styles.nav__link, "ml-auto  mr-2"].join(" ")}
                  onClick={() => {
                    this.smoothScroll("search-cats");
                  }}
                >
                  Start now
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={() => {
                    this.smoothScroll("contact");
                  }}
                  className={[styles.nav__link, "ml-auto  mr-2"].join(" ")}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
