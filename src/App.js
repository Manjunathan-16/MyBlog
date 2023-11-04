import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Blog from "./Component/Blog";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/" />
        <Routes>
          <Route path="/" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
