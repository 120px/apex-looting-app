import DeathBoxComponent from "./components/DeathBoxComponent";
import HealthBar from "./components/playerInfo/HealthBar";
import PlayerProfileInfoComponent from "./components/PlayerProfileInfoComponent";
import BottomCloseBar from "./components/BottomCloseBar";
import OpenLootBoxScreenComponent from "./components/OpenLootBoxScreenComponent";
import "./CSS/CSS_App.css"
import {useState, useEffect} from "react"

function App() {

  const [state, setState] = useState({
    isready: false,
    shield: null,
    helmet: null,
    backpack: null,
    knockdownShield: null,
    ammo : null,
    consumables: null
  })

  useEffect(() => {
      generateShield()
      
  }, [])

  const generateShield = async () => {
      try{
          await fetch("/generateShield")
          .then(response => response.json())
          .then((json) => {
              setState({
                isready: true,
                shield: json["shield"], 
                helmet: json["helmet"],
                backpack: json["backpack"],
                knockdownShield: json["knockdownShield"],
                ammo: json["ammo"],
                consumables: json["consumables"]
            })
          })
      }
      catch(e){
          console.log(e)
      }
  }

  const [newShield, setNewShield] = useState({
    name : "Evo Shield",
    colour : "grey",
    armorCells : 2
  })

  const doShieldSwap = () =>{
    var oldNewShield = newShield

    setNewShield(state.shield)
    setState(prevState => {
      return {...prevState, shield: oldNewShield}
    })
    notifyShieldSwap()
  }

  const notifyShieldSwap = () => {
    
  }

  return (
    <div>
    <OpenLootBoxScreenComponent></OpenLootBoxScreenComponent>
      <div className="Deathbox-Container">

        

        {state.isready === true ? 
        <DeathBoxComponent consumables={state.consumables} ammo={state.ammo} shield = {state.shield} helmet = {state.helmet} backpack={state.backpack}
        knockdownShield={state.knockdownShield} doShieldSwap={doShieldSwap}>
        </DeathBoxComponent> : null}

      </div>

      <div className="bottom-space-container">
          <div className="bottom-space">
              <BottomCloseBar></BottomCloseBar>
          </div>
      </div>

      <div className="player-info-container">
        <PlayerProfileInfoComponent newShield = {newShield}>
        </PlayerProfileInfoComponent>
      </div>
          
      

    </div>
  );
}

export default App;
