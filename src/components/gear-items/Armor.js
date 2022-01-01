import React from 'react'

const Armor = ({shield, doShieldSwap}) => {

    return (
        <div className='single-item-gear-container'>
            <h3 className="single-item-gear" style={{background: shield.colour}} onClick={doShieldSwap}>{shield.name}</h3>
        </div>
    )
}

export default Armor
