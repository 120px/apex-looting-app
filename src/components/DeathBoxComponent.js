import DeathBoxWeaponComponent from './DeathBoxWeaponComponent'
import DeathBoxAmmoComponent from './DeathBoxAmmoComponent'
import DeathBoxGearComponent from './DeathBoxGearComponent'
import DeathBoxConsumablesComponent from './DeathBoxConsumablesComponent'
import DeathBoxAttatchmentsComponent from './DeathBoxAttachmentsComponent'
import BottomCloseBar from './BottomCloseBar'
import "../CSS/CSS_DeathBoxComponent.css"
import React from 'react'

const DeathBoxComponent = ({ammo, shield, helmet, backpack, knockdownShield, doShieldSwap, consumables }) => {

    return (
        
        <div className="">

            <div className="player-name-container">
                <h3 className="deathbox-name">LOOTER'S</h3>
                <h2 className="deathbox-title">DEATH BOX</h2>
            </div>
            
            <div className="DeathBox-inner-Container">

                <DeathBoxWeaponComponent>
                </DeathBoxWeaponComponent>

                <DeathBoxAmmoComponent ammo = {ammo}>
                </DeathBoxAmmoComponent>

                <DeathBoxGearComponent shield = {shield} helmet = {helmet} backpack={backpack} knockdownShield={knockdownShield} doShieldSwap={doShieldSwap}>
                </DeathBoxGearComponent>

                <DeathBoxConsumablesComponent consumables={consumables}>
                </DeathBoxConsumablesComponent>

                {/* <DeathBoxAttatchmentsComponent>
                </DeathBoxAttatchmentsComponent> */}


            </div>

        </div>
    )
}

export default DeathBoxComponent
