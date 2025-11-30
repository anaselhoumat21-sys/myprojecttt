import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ProductDetail from "./component/ProductDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="*"
            element={<h2 className="text-center mt-5">Page non trouvée</h2>}
              <p>ksdbcghvjhb </p>
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
