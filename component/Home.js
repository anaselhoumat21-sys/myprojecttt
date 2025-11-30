import React, { Component } from "react";
import { Link } from "react-router-dom";
import { products } from "../Data";

class Home extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Ordinateurs Portables</h1>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
