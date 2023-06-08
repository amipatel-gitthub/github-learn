import React, { useEffect, useState } from "react";

const baseUlr = "https://api.escuelajs.co/api/v1/categories"

function Practice(){
    const [user, setUser] = useState([]);

    const getValue = async(url) => {
        try {
            const data = await fetch(url)
            setUser ( await data.json())
            // setUser(res);
        } catch (error) {
            console.log('error')
        }
    }

    useEffect(() => {
       getValue(baseUlr)
    }, []);
    return(
        <>
            <div className="container">
                <h1>Categories</h1>
                <table>
                    {user.map((value) =>{
                        return(
                           
                            <div className="card" style={{width:'400px'}}>
                                <ul className="list-unstyled">
                                   
                                    <li><b>({value.id} ) {value.name} </b></li>
                                    <li><img src={value.image} alt="not found" style={{width:'50px',height:'50px'}}/> </li>
                                    <li>CreationAt : {value.creationAt}</li>
                                    <li>UpdatedAt :  {value.updatedAt}</li>
                                </ul>
                            </div>
                           
                        )
                    })}
                </table>
        </div>
        </>
    )
}

export default Practice;