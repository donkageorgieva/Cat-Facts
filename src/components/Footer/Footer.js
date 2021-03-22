import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";
import { EnvelopeFill, Facebook } from "react-bootstrap-icons";

const footer = () => {
  return (
    <footer className="py-5 contact ">
      <Container>
        <Col>
          <Row>
            <h5 className={styles.Subtitle}>Contacts</h5>
          </Row>

          <Row>
            <EnvelopeFill className="mt-1 mr-2" /> <p>CatInfo@gmail.com</p>
          </Row>
          <Row>
            <Facebook className="mt-1 mr-2" /> <p>Facebook.com/catinfo</p>
          </Row>
        </Col>
      </Container>
    </footer>
  );
};

export default footer;
