import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Home from "./views/Home";
import Destination from "./views/Destination";
import Crew from "./views/Crew";
import Technology from "./views/Technology";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/destination" exact component={() => <Destination />} />
      <Route path="/crew" exact component={() => <Crew />} />
      <Route path="/technology" exact component={() => <Technology />} />
    </BrowserRouter>
  );
};

export default App;
