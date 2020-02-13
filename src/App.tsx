import React from "react";
import "./App.css";

import Navbar from "./Utils/components/Navbar/Navbar";
import Homepage from "./Homepage/Homepage";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />

      <main className="App">
        <Homepage />
      </main>
    </React.Fragment>
  );
};

export default App;
