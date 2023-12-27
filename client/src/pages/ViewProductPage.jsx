import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/products/${id}`
        );
        console.log("Response data:", response.data);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h1>View Product Page</h1>
      {product ? (
        <div className="view-product-container">
          <h2>Product Title {product.name}</h2>
          <p>Content {product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewProductPage;
