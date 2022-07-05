import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const BeerDetails = () => {
  const [singleBeers, setSingleBeers] = React.useState([]);
  const params = useParams();

  const getBeer = async () => {
    let response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${params.id}`
    );
    setSingleBeers(response.data);
  };

  React.useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <Link to="/beers">All Beers</Link>
      <p>
        <img height="150" src={singleBeers.image_url} alt="beer" />
        <br />
        {singleBeers.name}
        <br />
        {singleBeers.tagline}
        <br />
        {singleBeers.first_brewed}
        <br />
        {singleBeers.attenuation_level}
        <br />
        {singleBeers.description}
        <br />
        {singleBeers.contributed_by}
      </p>
    </div>
  );
};

export default BeerDetails;
