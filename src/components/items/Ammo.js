import React from 'react'
import LightAmmo from './AmmoType/LightAmmo'
import HeavyAmmo from './AmmoType/HeavyAmmo'
import EnergyAmmo from './AmmoType/EnergyAmmo'
import ShotgunAmmo from './AmmoType/ShotgunAmmo'
import SniperAmmo from './AmmoType/SniperAmmo'
import Arrows from './AmmoType/Arrows'
import "../../CSS/CSS_Ammo.css"

const Ammo = ({ammo}) => {
    return (
        (ammo != null ? 
        <div className="Deathbox-Ammo-Grid">
            <LightAmmo ammo={ammo[0]}></LightAmmo>
            <HeavyAmmo ammo={ammo[1]}></HeavyAmmo>
            <EnergyAmmo ammo={ammo[2]}></EnergyAmmo>
            <ShotgunAmmo ammo={ammo[3]}></ShotgunAmmo>
            <SniperAmmo ammo={ammo[4]}></SniperAmmo>
            <Arrows ammo={ammo[5]}></Arrows>
        </div> : null)
        
    )
}

export default Ammo
