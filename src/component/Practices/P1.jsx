//this is json file api call

import React, { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const P1 = () => {
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
      {" "}
      <div className="container-fluid">
        <div className=" shadow-sm   bg-secondary text-light text-center mx-auto w-25 mt-3 rounded  ">
          <h5 className=" mt-2 p-2 ">User data In card format</h5>
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
                    <ul className="list-unstyled ">
                      <li class="fw-medium">Id : {value.id} </li>
                      <li>Name : {value.name} </li>
                      <li>UserName : {value.username} </li>
                      <li>Email : {value.email} </li>
                      <li>
                        Address :
                        <ol >
                          <li> Street : {value.address.street}</li>
                          <li> Suite : {value.address.suite}</li>
                          <li> City : {value.address.city}</li>
                          <li>ZipCode : {value.address.zipcode}</li>
                          <li>
                            Geo:
                            <ul>
                              <li>lat : {value.address.geo.lat}</li>
                              <li>ng : {value.address.geo.lng}</li>
                            </ul>
                          </li>
                        </ol>
                      </li>

                      <li>Phone : {value.phone} </li>
                      <li>Website : {value.website} </li>
                      <li>
                        Company :
                        <ul>
                          <li>Name : {value.company.name}</li>
                          <li>catchPhrase : {value.company.catchPhrase}</li>
                          <li>Bs : {value.company.bs}</li>
                        </ul>
                      </li>
                    </ul>
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

export default P1;
