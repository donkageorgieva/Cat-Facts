import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./CatInfo.module.scss";
import { scroller } from "react-scroll";
import {motion} from 'framer-motion';

const catInfo = (props) => {
  const smoothScroll = (href) => {
    scroller.scrollTo(href, {
      smooth: true,
      offset: -65,
      duration: 500,
    });
  };
  const scrollLeft = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      transition: 0.65,
      x: 0,


    }
  }

  const scrollBottom = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      transition: 0.65,
      y: 0,


    }
    
  }
  const scrollRight ={
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      transition: 0.65,
      x: 0,


    }
  }

  return (
    <section
      className={[styles.CatInfo, "d-flex align-items-center home"].join(" ")}
    >
      <Container className={styles.HeroContainer}>
        <Row>
          <Col sm className={styles.HeroTextContainer}>
            <motion.h1 initial="hidden" animate="visible" variants={scrollLeft}> Cats?</motion.h1>
            <motion.h2 initial="hidden" animate="visible" variants={scrollLeft}>
              Find out information about any cat breed in just a single click!{" "}
            </motion.h2>
            <motion.p initial="hidden" animate="visible" variants={scrollLeft} className="pt-2">
              Are you a future cat owner looking to adopt or purchase the
              perfect cat for your lifestyle? Or are you just a huge cat geek?
              It doesn't matter! Find out the cat info you was looking for!
            </motion.p>
            <Col>
              <Row>
                <motion.button initial="hidden"
                 animate="visible" variants={scrollBottom}
                  className="mr-3 btn btn-primary"
                  onClick={() => {
                    smoothScroll("search-cats");
                  }}
                 
                >
                  Start Now
                </motion.button>

                <motion.button className="btn btn-outline-info"
                initial="hidden" animate="visible" variants={scrollBottom}
                
                  onClick={() => {
                    smoothScroll("contact");
                  }}
                >
                  Contacts
                </motion.button>
              </Row>
            </Col>
          </Col>

          <Col sm className={styles.HeroImageContainer}>
            <motion.div className={styles.HeroImage} initial="hidden" animate="visible" variants={scrollRight}></motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default catInfo;
