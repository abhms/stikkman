// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./component/Card";
import Details from "./component/Details";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/Details" element={<Details />}></Route>
        {/* <Route path="/details" component={Details} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
