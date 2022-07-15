import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/navegation/Navbar";
import { Banner } from "./components/banner/Banner";
import { Card } from "./components/Cards/Cards";
import { Articles } from "./components/articles/Articles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Navbar />
        <Banner />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Articles />
      </div>
    </div>
  );
}

export default App;
