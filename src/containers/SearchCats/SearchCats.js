import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import styles from "./SearchCats.module.scss";
import axios from "axios";
import ChosenBreed from "../ChosenBreed/ChosenBreed";

class SearchCats extends Component {
  state = {
    allBreeds: [],
    breedToDisplay: null,
  };
  componentDidMount() {
    axios.get("/breeds").then((response) => {
      this.setState({ allBreeds: response.data });
    });
  }
  selected = (selectedBreed) => {
    if (selectedBreed.value.length === 4) {
      this.setState({ breedToDisplay: selectedBreed.value });
    } else {
      this.setState({ breedToDisplay: null });
    }
  };
  render() {
    const breedOptions = this.state.allBreeds.map((breed) => {
      return (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      );
    });
    return (
      <main className={[styles.MainContent, "search-cats"].join(" ")}>
        <section>
          <Container>
            <h2 className="mb-3">Select any Breed</h2>
            <Form.Control
              as="select"
              onChange={(e) => {
                this.selected(e.target.options[e.target.selectedIndex]);
              }}
            >
              <option>Choose a breed...</option>
              {breedOptions}
            </Form.Control>
            <ChosenBreed id={this.state.breedToDisplay} />
          </Container>
        </section>
      </main>
    );
  }
}

export default SearchCats;
