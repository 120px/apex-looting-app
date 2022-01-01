import React from 'react'
import Syringe from './Consumables/Syringe'
import MedKit from './Consumables/MedKit'
import ShiedCell from './Consumables/ShiedCell'
import ShieldBattery from './Consumables/ShieldBattery'
import PhoenixKit from './Consumables/PhoenixKit'
import Phoenix from './Consumables/PhoenixKit'
import UltimateAccel from "./Consumables/UltimateAccel"
import FragGrenade from './Consumables/FragGrenade'
import Thermite from './Consumables/Thermite'
import ArcStar from "./Consumables/ArcStar"


const Consumable = ({consumables}) => {
    return (
        <div className="consumable-container">
            <PhoenixKit consumables={consumables[4]}></PhoenixKit>
            <ShieldBattery consumables={consumables[3]}></ShieldBattery>
            <MedKit consumables={consumables[2]}></MedKit>
            <ShiedCell consumables={consumables[1]} ></ShiedCell>
            <Syringe consumables={consumables[0]}></Syringe>
            <FragGrenade consumables={consumables[5]}></FragGrenade>
            <Thermite consumables={consumables[6]}></Thermite>
            <ArcStar consumables={consumables[7]}></ArcStar>
            <UltimateAccel consumables={consumables[8]}></UltimateAccel>
            
        </div>
    )
}

export default Consumable
