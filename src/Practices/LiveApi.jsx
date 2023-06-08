import React, { useEffect, useState } from 'react';
import './tbl.css'

const baseUrl = "https://jsonplaceholder.typicode.com/albums"

const LiveApi = () => {

    const [userApi, setUserApi] = useState([])

    const getValue = async (url) => {
        try {
            const data = await fetch(url)
            const res = await data.json()
            setUserApi(res);

        } catch (error) {
            console.log('error')
        }
    }

    useEffect(() => {
        getValue(baseUrl)
    }, []);
    return (
        <div className='container mb-5'>
            <table className="table table-hover shadow-inset rounded">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Create Date</th>
                    </tr>
                </thead>
                <tbody>
                    {userApi.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.userId}</td>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LiveApi;
