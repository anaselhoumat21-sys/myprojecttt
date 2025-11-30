import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../Data";

// Helper HOC باش نستعمل useParams في class
function withRouter(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class ProductDetail extends Component {
  render() {
    const { id } = this.props.params; // جاي من HOC
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return <h2 className="text-center mt-5">Produit non trouvé</h2>;
    }

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1>{product.name}</h1>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-3"
              style={{ maxHeight: "300px" }}
            />
            <p>{product.price}</p>
            <Link to="/" className="btn btn-primary">
              Aller vers la page d'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductDetail);
