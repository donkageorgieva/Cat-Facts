import axios from "axios";
import React, { Component } from "react";
import CustomCard from "../../components/Card/Card";
import mainImage from "../../utilities/images/mainSectionImage.svg";
import styles from "./ChosenBreed.module.scss";
import { Image } from "react-bootstrap";

class ChosenBreed extends Component {
  state = {
    breed: null,
    imageURL: null,
    newBreed: false,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (!this.state.breed || this.state.breed.id !== this.props.id) {
        axios
          .get("/images/search?breed_ids=" + this.props.id)
          .then((response) => {
            this.setState({
              breed: response.data[0].breeds[0],
              imageURL: response.data[0].url,
            });
          });
      }
    }
  }

  render() {
    let breed = (
      <Image
        src={mainImage}
        alt="catSleeping"
        className={[styles.MainImage, "mt-5"].join(" ")}
      />
    );
    if (this.state.breed && this.state.breed.id === this.props.id) {
      breed = (
        <CustomCard cat={this.state.breed} imgURL={this.state.imageURL} />
      );
    }

    return <div className="d-flex justify-content-center">{breed}</div>;
  }
}

export default ChosenBreed;
