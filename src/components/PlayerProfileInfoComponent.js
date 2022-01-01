import React from 'react'
import PlayerArmor from './playerInfo/PlayerArmor'
import PlayerHealth from './playerInfo/PlayerHealth'
import "../CSS/CSS_PlayerProfileInfoComponent.css"

const PlayerProfileInfoComponent = ({newShield}) => {
    return (
        <div className="player-profile-container">
        
            <div className="player-image-container">
                <h2>IMG</h2>
            </div>

            <div className="player-stats-container">
                <h2>Shield Swapper</h2>

                <PlayerArmor newShield = {newShield}></PlayerArmor>
                <PlayerHealth></PlayerHealth>
            </div>

        </div>
    )
}

export default PlayerProfileInfoComponent
