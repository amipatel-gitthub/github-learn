import React, { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/photos";

const PhotoCard = () => {
    const [user, setUser] = useState([]);

    // const getValue = async (url) => {
    //     try {
    //         const data = await fetch(url);
    //         const res = await data.json();
    //         setUser(res);
    //     } catch (error) {
    //         console.log("error");
    //     }
    // };

    useEffect(() => {
        const getValue = async(url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setUser(data)
                
            } catch (error) {
                console.log('error')
            }
        }

        getValue(baseUrl);
    }, []);

    return (
        <div className="container">
            <div className=" shadow-sm   bg-secondary text-light text-center mx-auto w-25 mt-3 rounded  ">
                <h5 className=" mt-2 p-2 ">User data In card format</h5>
            </div>

            <div className=" border-0 mt-3">
                <ul
                    className="ps-0"
                    style={{
                        display: "grid",
                        "grid-template-columns": "1fr 1fr 1fr 1fr",
                        "grid-gap": "2em",
                    }}
                >
                    {user.map((value) => {
                        return (
                            <div className="card">
                                <ul className="list-unstyled">
                                    <li className="mt-2">
                                        {value.albumId}. ({value.id})   <a href={value.url} className="ps-2 text-decoration-none fw-medium">Tap to Show Image  </a>
                                    </li> <hr />
                                    <li>
                                        <img
                                            src={value.thumbnailUrl}
                                            className="border border-2 border-secondary rounded-circle mx-auto d-block"
                                            alt="not found"
                                        />{" "}
                                    </li>
                                    <li className="mt-1 mb-2 fw-medium text-capitalize">{value.title}</li>
                                </ul>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PhotoCard;
