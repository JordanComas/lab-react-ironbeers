import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = React.useState([]);

  const getBeer = async () => {
    let response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    setRandomBeer(response.data);
  };

  React.useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <p>
        <img height="150" src={randomBeer.image_url} alt="beer" />
        <br />
        {randomBeer.name}
        <br />
        {randomBeer.tagline}
        <br />
        {randomBeer.first_brewed}
        <br />
        {randomBeer.attenuation_level}
        <br />
        {randomBeer.description}
        <br />
        {randomBeer.contributed_by}
      </p>
    </div>
  );
};

export default RandomBeer;
