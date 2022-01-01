import React from 'react'
import { useEffect } from 'react'

const ArmorCell = ({currentArmor}) => {
    
    let x = []

        for (var i = 0; i.valueOf() < currentArmor.armorCells; i++){
            x.push(<div key={i} style={{borderBottom: "20px solid " + currentArmor.colour}} className="armor-cell"></div>)
        }

    return (
        <div className="armor-cell-container">
            {x}
        </div>
    )
}

export default ArmorCell
