import React from 'react';
import useTools from '../../Hooks/useTools';
import Tool from '../Home/Tool';
import Footer from '../Shared/Footer';

const Products = () => {
    const tools = useTools();
    return (
        <div>
            <h1 className='text-3xl text-primary font-bold text-center mb-5'>Products</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {tools.map(tool => <Tool key={tool._id} tool={tool} />)}
            </div>
        <Footer/>
        </div>
    );
};

export default Products;