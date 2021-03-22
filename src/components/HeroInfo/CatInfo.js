import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./CatInfo.module.scss";
import { scroller } from "react-scroll";

const catInfo = (props) => {
  const smoothScroll = (href) => {
    scroller.scrollTo(href, {
      smooth: true,
      offset: -65,
      duration: 500,
    });
  };
  return (
    <section
      className={[styles.CatInfo, "d-flex align-items-center home"].join(" ")}
    >
      <Container className={styles.HeroContainer}>
        <Row>
          <Col sm className={styles.HeroTextContainer}>
            <h1> Cats?</h1>
            <h2>
              Find out information about any cat breed in just a single click!{" "}
            </h2>
            <p className="pt-2">
              Are you a future cat owner looking to adopt or purchase the
              perfect cat for your lifestyle? Or are you just a huge cat geek?
              It doesn't matter! Find out the cat info you was looking for!
            </p>
            <Col>
              <Row>
                <Button
                  variant="primary"
                  onClick={() => {
                    smoothScroll("search-cats");
                  }}
                  className="mr-3"
                >
                  Start Now
                </Button>

                <Button
                  variant="outline-info"
                  onClick={() => {
                    smoothScroll("contact");
                  }}
                >
                  Contacts
                </Button>
              </Row>
            </Col>
          </Col>

          <Col sm className={styles.HeroImageContainer}>
            <div className={styles.HeroImage}></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default catInfo;
