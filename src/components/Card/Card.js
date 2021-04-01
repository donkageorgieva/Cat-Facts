import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import {
  LightningChargeFill,
  LightningCharge,
  EmojiFrown,
  EmojiLaughingFill,
  Thermometer,
  Star,
  StarFill,
} from "react-bootstrap-icons";
import styles from "./Card.module.scss";
import {motion } from 'framer-motion';
const card = (props) => {

  const levels = (level) => {
    return new Array(level)
      .fill(null)
      .map((filledStar, index) => {
        return <StarFill key={props.cat.id + "filled" + index} />;
      })
      .concat(
        new Array(5 - level).fill(null).map((stars, index) => {
          return <Star key={index + props.cat.id + "star"} />;
        })
      );
  };

  let energyLevel = levels(props.cat.energy_level);
  let childFriendly = levels(props.cat.child_friendly);
  let dogFriendly = levels(props.cat.dog_friendly);

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
  let catInfo = (
    <React.Fragment>
      <img  src={props.imgURL} className={[styles.CardImg, "card-img-top"]. join(' ')} />
      <h5 className="mt-3 card-title h5">{props.cat.name}</h5>
      <Card.Text>{props.cat.description}</Card.Text>

      <ListGroup>
        <ListGroupItem border="primary" variant="primary">
          {" "}
          <strong className="mr-2">Temperament:</strong> {props.cat.temperament}{" "}
          <Thermometer />
        </ListGroupItem>
        <ListGroupItem border="primary" variant="primary">
          {" "}
          <strong className="mr-2">Life Span:</strong> {props.cat.life_span}{" "}
          years{" "}
        </ListGroupItem>
        <ListGroupItem border="primary" variant="primary">
          {" "}
          <strong className="mr-2">Weight : </strong> {props.cat.weight.metric}
          kg ({props.cat.weight.imperial}lb){" "}
        </ListGroupItem>
        <ListGroupItem border="primary" variant="primary">
          {" "}
          <strong className="mr-2">
            {props.cat.energy_level <= 3 ? (
              <LightningCharge />
            ) : (
              <LightningChargeFill />
            )}{" "}
            Energy Level:{" "}
          </strong>{" "}
          {energyLevel}{" "}
        </ListGroupItem>
        <ListGroupItem
          border="primary"
          variant={props.cat.child_friendly <= 3 ? "danger" : "success"}
        >
          {" "}
          <strong className="mr-2">
            {" "}
            {props.cat.child_friendly > 3 ? (
              <EmojiLaughingFill />
            ) : (
              <EmojiFrown />
            )}{" "}
            Child Friendly:
          </strong>{" "}
          {childFriendly}{" "}
        </ListGroupItem>
        <ListGroupItem
          border="primary"
          variant={props.cat.dog_friendly <= 3 ? "danger" : "success"}
        >
          {" "}
          <strong className="mr-2">
            {" "}
            {props.cat.dog_friendly > 3 ? (
              <EmojiLaughingFill />
            ) : (
              <EmojiFrown />
            )}{" "}
            Dog Friendly:
          </strong>{" "}
          {dogFriendly}{" "}
        </ListGroupItem>
      </ListGroup>
      <form action={props.cat.wikipedia_url} target="_blank">
        <Button type="submit" variant="primary" className="mt-3">
          Wikipedia
        </Button>
      </form>
    </React.Fragment>
  );

  return (
    <motion.div className="card mt-3" border="primary" 
    initial="hidden" animate="visible" variants={scrollBottom}>
      <Card.Img variant="top" />
      <Card.Body>
        {catInfo}
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </motion.div>
  );
};

export default card;
