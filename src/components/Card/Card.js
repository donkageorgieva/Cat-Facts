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

const card = (props) => {
  console.log(props.cat);
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

  let catInfo = (
    <React.Fragment>
      <Card.Img variant="top" src={props.imgURL} className={styles.CardImg} />
      <Card.Title className="mt-3">{props.cat.name}</Card.Title>
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
    <Card className="mt-3" border="primary">
      <Card.Img variant="top" />
      <Card.Body>
        {catInfo}
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default card;
