import axios from "axios";
import React, {   useEffect, useState } from "react";
import CustomCard from "../../components/Card/Card";
import mainImage from "../../utilities/images/mainSectionImage.svg";
import styles from "./ChosenBreed.module.scss";
import { Image } from "react-bootstrap";
import { ref, inView, useInView } from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion';

const scaleAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.25,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: 0.65,
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
const ChosenBreed = (props) => {
  const [breed, setBreed] =  useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [newBreed, setNewBreed] =  useState(false);
  const controlAnimation = useAnimation();
const { ref, inView } = useInView();

  useEffect( () => {
    if (props.id) {
      if (!breed || breed.id !== props.id) {
        axios
          .get("/images/search?breed_ids=" + props.id)
          .then((response) => {
 
              setBreed(response.data[0].breeds[0]);
              setImageURL(response.data[0].url);
       
          });
      }
    }
  })
useEffect(()=> {
if (inView){
  controlAnimation.start('visible');
}
if (!inView){
  controlAnimation.start('hidden');
}
})
 
    let breedElement = (
      <motion.img ref={ref} initial="hidden" animate={controlAnimation}
      variants={scaleAnimation}
        src={mainImage}
        alt="catSleeping"
        className={[styles.MainImage, "mt-5"].join(" ")}
      />
    );
    if (breed && props.id) {
      breedElement = (
        <CustomCard cat={breed} imgURL={imageURL} />
      );
    }

    return <div className="d-flex justify-content-center">{breedElement}</div>;
  
}

export default ChosenBreed;
