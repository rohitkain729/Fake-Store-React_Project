import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function FakeStoreProducts() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https:fakestoreapi.com/products/category/${params.category}`)
      .then((response) => {
        setProducts(response.data);
      });
  });

  return (
    <div className="mt-3 p-4">
      <h3 className="mb-2"> You are Viewing {params.category}</h3>
      <div className="d-flex flex-wrap p-2">

      {products.map((product) => (
        <div class="card w-25 m-0 border-0">
          <img
            style={{ height:"10rem", width:"8.6rem" }}
            src={product.image}
            className="card p-2 me-3 border-0 object-fit-contain  ms-5"
          />
          <div className="card-body">
            <h5 className="card-title fs-6 fw-bold">{product.title.substring(0,20)}</h5>
            <p className="card-text fs-6 h-50">{product.description.substring(0,80)}</p>
            <button className="btn btn-warning m-0"> 
              <Link className="text-decoration-none text-white fs-6" to={`/details/${product.id}`}>See More...</Link> </button>
          </div>
        </div>
      ))}

      </div>

      <div>
        <Link to="/categories" className="btn btn-success">Back</Link>
      </div>
    </div>
  );
}
