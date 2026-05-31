import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function FakeStoreDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
   <div className="row">

     <div
      className="card w-50 p-2  ms-5 mt-2 border-0 bg-light col"
      style={{ height: "34rem" }}
    >
      <img
        src={product.image}
        className="card-img-top  ms-auto me-auto"
        style={{ height: "20rem", width: "15rem" }}
      />

      <div className="card-body text-left " style={{ height: "1rem" }}>
        <h5 className="card-title fs-6">Title : {product.title}</h5>
        <h5 className="card-title fs-6">Price : {product.price}</h5>
        {/* <p className="card-text" style={{fontSize:'.9rem'}}>Description : {product.description}</p> */}
        <button className="btn btn-success w-25 ">
          {" "}
          <Link
            className="text-white text-decoration-none"
            to={`/products/${product.category}`}
          >
            Back
          </Link>{" "}
        </button>
        <button className="btn btn-danger ms-2">
          <Link
            className="text-decoration-none text-white"
            to={`rating/${product.id}`}
          >
            Rating & Description
          </Link>{" "}
        </button>
      </div>
    </div>

    <div className="col">
        <Outlet />

    </div>

   </div>
  );
}
