import React, { useEffect, useState } from "react";
import "./Abc.css";

const baseUrl = "https://fakestoreapi.com/products";

const Card = () => {
  const [user, setUser] = useState([]);

  const getValue = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getValue(baseUrl);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className=" shadow-sm   bg-secondary text-light text-center mx-auto w-25 mt-3 rounded  ">
          <h5 className=" mt-2 p-2 ">Data in Card Format</h5>
        </div>

        <div className=" border-0 mt-3">
          <ul
            className="ps-0"
            style={{
              display: "grid",
              "grid-template-columns": "1fr 1fr 1fr",
              "grid-gap": "2em",
            }}
          >
            {user.map((value, index) => {
              return (
                <div
                  className="card mt-3"
                  key={index}
                  style={{ width: "500px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-center mb-5">
                      <u>{value.title}</u>
                    </h5>
                    <div className="d-flex">
                      <div className="col-6 ">
                        <img
                          src={value.image}
                          className="card-img-top w-75 h-75 rounded mx-auto d-block border p-2 border-dark "
                          alt="..."
                        />
                      </div>
                      <div className="col-6  ">
                        <p className="card-text">
                          <b>Price : </b>
                          ${value.price}
                        </p>
                        <p className="card-text">
                          <b>Category : </b>
                          {value.category}
                        </p>
                        <p className="card-text">
                          <b>Rating : </b>
                          {value.rating.rate},{value.rating.count}
                        </p>
                      </div>
                    </div>

                    <p className="card-text">{value.description}</p>
                    <button className="button-55" role="button">Add to Cart</button>

                    
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
