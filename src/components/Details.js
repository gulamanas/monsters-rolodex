import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const Details = (props) => {
    const params = useParams()
    const [detailData, setDetailData] = useState({})
    console.log(params);

    const getData = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(user => {
                console.log(user);
                setDetailData(user)
            }).catch(err => alert(err.message))
    }

    useEffect(() => {
        getData(params.id)
    }, [params.id])

    console.log(props);
    const { name, email, username, phone } = detailData
    // const { suite, street, city } = detailData.address
    return (
        <div className='bg-gradient-to-r from-cyan-800 to-blue-800 h-screen flex flex-col items-center'>
            {
                Object.keys(detailData).length > 0 &&
                // detailData &&
                <div className="">
                    <img
                        src={`https://robohash.org/${params.id}/?set=set2&size=360x360`}
                        alt={`monster ${name}`} className='p-10 mt-8 rounded-xl bg-cyan-400'
                    />
                    <div className='my-8 text-center font-bold text-4xl text-cyan-600'>Details</div>
                    <div className='text-xl '><span className='mr-20  font-medium '>Name:</span> {name}</div>
                    <div className='text-xl'>
                        <span className='mr-16  font-medium '>Address:</span> {detailData.address.suite}, {detailData.address.street}, {detailData.address.city}</div>
                    <div className='text-xl'><span className='mr-20  font-medium '>Phone:</span> {phone}</div>
                    <div className='text-xl'><span className='mr-20  font-medium '>Email:</span> {email}</div>
                    <div className='text-xl'><span className='mr-12  font-medium '>Username:</span> {username}</div>
                </div>

            }
            <Link to='/'><button className='mt-16 px-6 py-3 bg-cyan-300 font-medium rounded-full'>Go back to home</button></Link>

        </div>
    )
}

export default Details