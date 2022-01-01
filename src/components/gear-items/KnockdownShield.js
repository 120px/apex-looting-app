import React from 'react'

const KnockdownShield = ({knockdownShield}) => {
    return (
        <div className='single-item-gear-container div3'>
            <h3 className="single-item-gear" style={{background: knockdownShield.colour}}>{knockdownShield.name}</h3>
        </div>
    )
}

export default KnockdownShield
