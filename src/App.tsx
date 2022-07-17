import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/navegation/Navbar";
import { Banner } from "./components/banner/Banner";
import { SearchBar } from "./components/searchBar/SearchBar";
import { Cards } from "./components/cards/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="headerContainer">
        <Banner />
        <Navbar />
      </div>
      <SearchBar />
      {/* <Cards /> */}
    </div>
  );
}

export default App;
