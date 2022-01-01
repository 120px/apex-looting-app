import React from 'react'

const Arrows = ({ammo}) => {
    return (
        <div className="ammo-cell-container">
            <h3 className="ammo-cell ammo-cell-arrow" style={{background:ammo.colour}}>{ammo.name}</h3>
        </div>
    )
}

export default Arrows
