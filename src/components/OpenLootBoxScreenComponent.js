import React from 'react'

const OpenLootBoxScreenComponent = ({isOpen}) => {
    
    return (
        <div className="notify-open-lootbox">
            {isOpen === false ? 
            <div className="inner-notify-open-lootbox">
                <h1>Press F11 to go Fullscreen</h1>
                <h1>Put mouse in the square and hold E to open lootbox</h1>

            </div> : null}
            
        </div>
    )
}

export default OpenLootBoxScreenComponent
