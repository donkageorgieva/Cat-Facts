import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./Header.module.scss";
import HeroContent from "../HeroInfo/CatInfo";
import NavBar from "../../containers/StikcyNav/StickyNav";

const header = (props) => {
  return (
    <header className={styles.Header}>
      <NavBar />

      <HeroContent />
    </header>
  );
};

export default header;
