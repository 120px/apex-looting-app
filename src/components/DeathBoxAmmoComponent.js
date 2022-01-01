import React from 'react'
import Ammo from "./items/Ammo"
import "../CSS/CSS_DeathBoxAmmoComponent.css"

const DeathBoxAmmoComponent = ({ammo}) => {
    return (
        <div className="Deathbox-ammo-container">
            <h2 class="ammo-title">AMMO</h2>
            <Ammo ammo={ammo}></Ammo>
        </div>
    )
}

export default DeathBoxAmmoComponent
