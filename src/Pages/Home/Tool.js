import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({tool}) => {
    const { _id, Name, Details, Price, img } = tool;
        return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Name}</h2>
                <p>{Details}</p>
                <p>Price: <strong>$ {Price}</strong></p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary"><Link to={`/purchase/${_id}`} >Purchase</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Tool;