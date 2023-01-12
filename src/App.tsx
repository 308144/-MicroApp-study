import React from "react";
import "./App.css";

import { Route, Routes, Link } from "react-router-dom";
import AppOne from "./AppOne";
import AppTwo from "./AppTwo";

function App() {
  return (
    <div className="App">
      <Link to={"/app1"}>app1</Link>
      <br />
      <Link to={"/app2"}>app2</Link>

      <Routes>
        <Route path="/app1/*" element={<AppOne />}></Route>
        <Route path="/app2/*" element={<AppTwo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
