import React from 'react'

const OpenLootBoxScreenComponent = ({isOpen, wasShieldSwapped}) => {
    
    return (
        <div className="notify-open-lootbox">


            {isOpen === false ? 
            <div className="inner-notify-open-lootbox">
                <h1>Press F11 to go Fullscreen</h1>
                <h1>Put mouse in the square and hold E to open lootbox</h1>
                {wasShieldSwapped === false ? <h1 className="notify-not-swapped">Shield not swapped!</h1> : null}

            </div> : null}
            
        </div>
    )
}

export default OpenLootBoxScreenComponent
