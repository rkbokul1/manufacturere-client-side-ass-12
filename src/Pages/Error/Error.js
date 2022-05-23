import React from 'react';

const Error = () => {
    return (
        <div className='h-screen grid grid-cols-1 justify-items-center content-center'>
            <h1 className='text-3xl font-bold text-red-500'>404!</h1>
            <h1 className='text-3xl font-bold text-red-500'>Content Not Found</h1>
        </div>
    );
};

export default Error;