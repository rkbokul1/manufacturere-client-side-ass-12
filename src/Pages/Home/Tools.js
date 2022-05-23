import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-3xl text-primary font-bold text-center mb-5'>Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {tools.slice(0, 6).map(tool => <Tool key={tool._id} too={tool} />)}
            </div>
        </div>
    );
};

export default Tools;