import React from 'react'
import Gear from './items/Gear'
import "../CSS/CSS_GearItems.css"

const DeathBoxGearComponent = ({shield, helmet, backpack, knockdownShield, doShieldSwap}) => {
    return (
        <div className="Deathbox-Gear-container">
            <h2 className="gear-title">GEAR</h2>
                <Gear shield = {shield} helmet={helmet} backpack={backpack} knockdownShield={knockdownShield} doShieldSwap={doShieldSwap}></Gear>
        </div>
    )
}

export default DeathBoxGearComponent
