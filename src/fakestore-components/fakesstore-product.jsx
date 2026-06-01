import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

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
      <h3 className="mb-2 fs-6"> You are Viewing {params.category}</h3>
      <div
        className="row"
      >
        <div className="col-2 border border-0s overflow-auto p-2 mb-2" style={{height:"26rem",width:"12rem"}}>
          {products.map((product) => (
            <div class="card  border-0">
              <img
                style={{ height: "7rem", width: "7.0rem" }}
                src={product.image}
                className="card p-2 me-3 border-0 object-fit-contain  ms-3"
              />
              <div className="card-body">
                <h5 className="card-title  fw-bold" style={{fontSize:".7rem"}}>
                  {product.title.substring(0, 20)}
                </h5>
                {/* <p className="card-text fs-6 h-50">{product.description.substring(0,80)}</p> */}
                <button className="btn btn-warning ms-2"  style={{width:'6rem',fontSize:'.8rem'}}>
                  <Link
                    className="text-decoration-none text-white "
                    to={`details/${product.id}`}  
                  >
                    See More...
                  </Link>{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-10">
             <Outlet/>
        </div>
      </div>

      <div>
        <Link to="/categories" className="btn btn-success">
          Back
        </Link>
      </div>
    </div>
  );
}
