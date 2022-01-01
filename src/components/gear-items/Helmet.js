import React from 'react'


const Helmet = ({helmet}) => {
    return (
        <div className="single-item-gear-container div1" >
            <h3 className="single-item-gear" style={{background: helmet.colour}}>{helmet.name}</h3>
        </div>
    )
}

export default Helmet