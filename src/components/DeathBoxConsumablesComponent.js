import React from 'react'
import Consumable from './items/Consumable'
import "../CSS/CSS_DeathBoxGearComponent.css"

const DeathBoxConsumablesComponent = ({consumables}) => {
    return (
        <div className="Deathbox-ammo-container">
            <h2 className="consumable-title">Consumables</h2>

            <Consumable consumables={consumables}></Consumable>
        </div>
    )
}

export default DeathBoxConsumablesComponent
