import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseDetails from './PurchaseDetails';

const Purchase = () => {
    const { paramsId } = useParams();
    const [singleTool, setSingleTool] = useState([]);
    const urls = `http://localhost:5000/tools/${paramsId}`
    useEffect(() => {
        fetch(urls)
            .then(res => res.json())
            .then(data => setSingleTool(data))
    }, [{paramsId}])


    return (
        <div className='pt-8 grid justify-center'>
            <h1 className='text-3xl text-center font-bold my-3'>Purchase Page</h1>
            <h2 className="text-2xl text-center font-bold">Product Name: {singleTool.Name}</h2>
            <h2 className="text-xl text-center font-bold">Price: {singleTool.Price}</h2>


            {/* card */}
            <PurchaseDetails singleTool={singleTool}></PurchaseDetails>
        </div>
    );
};

export default Purchase;