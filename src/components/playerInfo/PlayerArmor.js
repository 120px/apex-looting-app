import React from 'react'
import ArmorCell from './ArmorCell'
import "../../CSS/CSS_ArmorCell.css"
import {useState} from "react"

const PlayerArmor = ({newShield}) => {

    return (
        <div className="armor">

            <div className="armor-hp-cells">

                <ArmorCell currentArmor = {newShield}></ArmorCell>
                
            </div>
            
        </div>
    )
}

export default PlayerArmor
