import React from 'react'


const Backpack = ({backpack}) => {
    return (
        <div className='single-item-gear-container div2'>
            <h3 className="single-item-gear" style={{background: backpack.colour}}>{backpack.name}</h3>
        </div>
    )
}

export default Backpack
