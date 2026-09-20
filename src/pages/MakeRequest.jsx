import axios from "axios";
import React, { useEffect, useState } from "react";

const MakeRequest = () => {
  const [products, setproducts] = useState([]);
  const [run, setisRunning] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);

      setproducts(response.data);

      setisRunning(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {run ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="d-flex gap-2 flex-wrap">
          {products.map((prod, index) => (
            <div class="card" style={{ width: "18rem" }} key={index}>
              <img src={prod.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{prod.title}</h5>
                <p class="card-text">{prod.description}</p>
                <a href="#" class="btn btn-primary">
                  Buy at ${prod.price}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeRequest;
