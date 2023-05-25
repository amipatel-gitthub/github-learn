import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState ,useEffect} from 'react';

const baseUrl = "https://jsonplaceholder.typicode.com/users"

const Table = () => {
    const [user, setUser] = useState([])

    const getValue = async (url) => {
        try {
           const res = await fetch(url) 
           const data = await res.json();
           setUser(data);
        } catch (error) {
            console.log('error')
        }
    }

    useEffect(() => {
      getValue(baseUrl)
    }, [])
    


    return (
        <div className='container'>
            <table className='mt-5 '>
                <thead>
                    <tr>
                        <th>id </th>
                        <th>name </th>
                        <th>username </th>
                        <th>email </th>
                        <th>phone </th>
                        <th>website </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((value, index) => {
                        return(
                            <tr key={index}>
                                <th>{value.id} </th>
                                <th>{value.name} </th>
                                <th>{value.username} </th>
                                <th>{value.email} </th>
                                <th>{value.phone} </th>
                                <th>{value.website} </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    );
}

export default Table;






























// import React, { useEffect, useState } from "react";

// function Table(){

//     const[user, setUser] = useState([]);

//     const baseUrl = "https://jsonplaceholder.typicode.com/users";

//     const getValue = async(url) => {
//         try {
//             const res = await fetch(url)
//             const data = await res.json();
//             setUser(data);

//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getValue(baseUrl);
//     },[]);
//     return( 
//         <>
//             <div className="container">
//                 <h4 className="text-center mt-5">Table from Api</h4>

//                 <table className="table table-info table-hover table-bordered mt-3  mb-3">
//                     <thead>
//                         <th>id</th>
//                         <th>name</th>
//                         <th>username</th>
//                         <th>email</th>
//                         <th>address</th>
//                         <th>phone no.</th>
//                         <th>website</th>
//                     </thead>
//                     <tbody>
//                         {user.map((value,index) => {
//                             return(
//                                 <tr key={index}>
//                                     <td>{value.id}</td>
//                                     <td>{value.name}</td>
//                                     <td>{value.username}</td>
//                                     <td>{value.email}</td>
//                                     <td>{value.address.street},{value.address.suite},{value.address.city}</td>
//                                     <td>{value.phone}</td>
//                                     <td>{value.website}</td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>

//             </div>
//         </>
//     )
// }

// export default Table;
