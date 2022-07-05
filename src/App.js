import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import BeerDetails from "./components/BeerDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/singlebeer/:id" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
