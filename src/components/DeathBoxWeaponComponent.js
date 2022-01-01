import "../CSS/CSS_DeathBoxWeaponComponent.css"
import Weapon from "./items/Weapon"
import React from 'react'

const DeathBoxWeaponComponent = () => {
    return (
        <div>
            <h2 class="weapon-title">WEAPONS</h2>

            <div className="DB-Weapon-Container">

                <div className="DB-Weapon1">

                    <Weapon></Weapon>
                    
                </div>
                <div className="DB-Weapon2">

                    <Weapon></Weapon>

                </div>

            </div>
        </div>
    )
}

export default DeathBoxWeaponComponent
