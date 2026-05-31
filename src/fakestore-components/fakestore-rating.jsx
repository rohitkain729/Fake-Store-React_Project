import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function FakeStoreRatings() {
  const params = useParams();
  const [product, setProduct] = useState({ rating: { rate: 0 },description:'' });
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setProduct(res.data);
    });
  });
  console.log(product);

  return (
    <div className="">
      <h3 className="text-center">Rating & Description</h3>
      <div className=" border-3 border-bottom border-danger-subtle mb-2"></div>
      <p className="text-left ">{product.description}</p>
      <span className="badge bg-success rounded-4 rounded-circle p-2 ">
        {product.rating.rate} <span className="bi bi-star-fill"></span>
      </span>
    </div>
  );
}
