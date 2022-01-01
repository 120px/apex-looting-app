import React from 'react'

const HeavyAmmo = ({ammo}) => {
    return (
        <div className="ammo-cell-container">
            <h3 className="ammo-cell" style={{background:ammo.colour}}>{ammo.name}</h3>
        </div>
    )
}

export default HeavyAmmo
