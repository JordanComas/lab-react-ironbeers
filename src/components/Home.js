import React from "react";
import { Link } from "react-router-dom";
import beer from "../assets/beers.png";
import randomPic from "../assets/random-beer.png";

const Home = () => {
  return (
    <div className="home">
      <Link to="/beers">
        <img height="100" src={beer} />
        <br />
        All Beers
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Aenean mollis leo enim, id dapibus risus pretium vel.
        </p>
      </Link>
      <Link to="/random-beer">
        <img height="100" src={randomPic} />
        <br />
        Random Beers
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Aenean mollis leo enim, id dapibus risus pretium vel.
        </p>
      </Link>
    </div>
  );
};

export default Home;
