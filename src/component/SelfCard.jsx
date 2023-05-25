import React, { useEffect, useState } from "react";

const baseUrl = "https://fakestoreapi.com/products";

const SelfCard = () => {
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
            {user.map((value,index) => {
                return(
                    <div className="card" key={index}>
                        <p> {value.id }</p>
                        <p> {value.title }</p>
                        <p> {value.price }</p>
                        <p> {value.category }</p>
                    </div>
                )
            })}
        </div>
    </>
  );
};

export default SelfCard;
