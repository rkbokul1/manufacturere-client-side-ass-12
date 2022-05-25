import React from 'react';
import useTools from '../../Hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const tools = useTools();
    
    return (
        <div className='my-10 pt-5'>
            <h1 className='text-3xl text-primary font-bold text-center mb-5'>Products</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {tools.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool} />)}
            </div>
        </div>
    );
};

export default Tools;