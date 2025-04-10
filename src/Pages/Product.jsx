import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });
  return (
    <div>
      Product
      <button onClick={() => navigate("create")}>Add Product</button>
      <Link to={"details/5"}>
        <button>Navigate to Product Detail - 5</button>
      </Link>
      {goToProduct && <Navigate to="details/3" />}
      <button onClick={() => setGoToProduct({ goToProduct: true })}>
        Navigate to Product - 3 {setGoToProduct}
      </button>
    </div>
  );
}

export default Product;
