import React, { useState } from 'react'
import { useEffect } from 'react'
import Armor from '../gear-items/Armor'
import Helmet from '../gear-items/Helmet'
import Backpack from '../gear-items/Backpack'
import KnockdownShield from '../gear-items/KnockdownShield'
import "../../CSS/CSS_GearItems.css"

const Gear = ({shield, helmet, backpack, knockdownShield, doShieldSwap}) => {

    const [maybeBackPack, setBackPack] = useState()

    useEffect(() => {
        showBackpack()
        return () => {
            
        }
    }, [])

    const showBackpack = () =>{
        let chance = Math.floor(Math.random() * 2);
        setBackPack(chance)
    }

    return (
        <div className="DeathBox-Gear-Container">

            <div>
                <Helmet  helmet={helmet} ></Helmet>

                {maybeBackPack === 0 ? null : <Backpack backpack={backpack}></Backpack>}

                <KnockdownShield knockdownShield={knockdownShield}></KnockdownShield>
                <Armor shield={shield} doShieldSwap={doShieldSwap}></Armor>
            </div>

        </div>
    )
}

export default Gear
