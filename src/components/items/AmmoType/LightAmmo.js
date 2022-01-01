import React from 'react'
import "../../../CSS/CSS_items/CSS_LightAmmo.css"

const LightAmmo = ({ammo}) => {
    return (
        <div className="ammo-cell-container">
            <h3 className="ammo-cell" style={{background:ammo.colour}}>{ammo.name}</h3>
        </div>
    )
}

export default LightAmmo
