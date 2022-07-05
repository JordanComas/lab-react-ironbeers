import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Beers = () => {
  const [allBeers, setAllBeers] = React.useState([]);

  React.useEffect(() => {
    getBeer();
  }, []);

  const getBeer = async () => {
    let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    setAllBeers(response.data);
  };

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <p>
        {allBeers.map((beer) => {
          console.log(beer);
          return (
            <Link to={`/singlebeer/${beer._id}`}>
              <img height="150" src={beer.image_url} alt="beer" />
              <br />
              {beer.name}
              <br />
              {beer.tagline}
              <br />
              {beer.contributed_by}
              <br />
            </Link>
          );
        })}
      </p>
    </div>
  );
};

export default Beers;
