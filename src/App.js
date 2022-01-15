import DeathBoxComponent from "./components/DeathBoxComponent";
import PlayerProfileInfoComponent from "./components/PlayerProfileInfoComponent";
import BottomCloseBar from "./components/BottomCloseBar";
import OpenLootBoxScreenComponent from "./components/OpenLootBoxScreenComponent";
import "./CSS/CSS_App.css"
import {useState, useEffect, useCallback, useRef} from "react"
import ProgressBar from "react-bootstrap/ProgressBar"

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [wasShieldSwapped, setWasShieldSwapped] = useState(true)
  const openRef = useRef(false)
  const timeHeldRef = useRef(-1)  
  const initialTimeRef = useRef(-1)  
  const elapsedRef = useRef(-1)
  const totalTime = useRef(0)
  const isMouseCenteredRef = useRef(false)

  const [state, setState] = useState({
    isready: false,
    shield: null,
    helmet: null,
    backpack: null,
    knockdownShield: null,
    ammo : null,
    consumables: null
  })

  const [newShield, setNewShield] = useState({
    name : "Evo Shield",
    colour : "grey",
    armorCells : 2
  })

  const openDeathBox = useCallback(e => {
    const {keyCode} = e
    
    //holding E for deathbox
      if(isOpen === false)
      {
        if(keyCode === 69 && timeHeldRef.current === -1 && isMouseCenteredRef.current == true){
          //start time
          timeHeldRef.current = (new Date().getTime()/1000)

        }
        //stop timer when button is held for more than .3 seconds   
        else if (keyCode === 69 && (new Date().getTime()/1000) - timeHeldRef.current > .3 && isMouseCenteredRef.current == true){
          setIsOpen(true)
          setWasShieldSwapped(false)
          openRef.current = true
          timeHeldRef.current = -1
          initialTimeRef.current = (new Date().getTime()/1000)
          elapsedRef.current = initialTimeRef.current
            
        }
      }
    },[])

  const closeDeathBox = useCallback(e  => {
    if(openRef.current === true){
      if(e.keyCode === 81){
        generateShield()
        setIsOpen(false)
        elapsedRef.current = (new Date().getTime() / 1000) - initialTimeRef.current
        totalTime.current = Math.round(elapsedRef.current * 1000 )/ 1000
        isMouseCenteredRef.current = false
        document.body.style.backgroundColor = "rgb(102, 91, 91)"
        
      }
    }
  } , [])

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

  const doShieldSwap = () =>{
    var oldNewShield = newShield
    setWasShieldSwapped(true)
    setNewShield(state.shield)
    setState(prevState => {
      return {...prevState, shield: oldNewShield}
    })
    notifyShieldSwap()
  }

  const notifyShieldSwap = () => {
    if(state.shield.colour == "grey"){
      document.body.style.backgroundColor = "rgba(168, 168, 168, 0.3)"
    }
    else if(state.shield.colour == "#083e73"){
      document.body.style.backgroundColor = "rgba(8, 62, 115, 0.3)"
    }
    else if(state.shield.colour == "#3d1550"){
      document.body.style.backgroundColor = "rgba(61, 21, 80, 0.3)"
    }
    else if(state.shield.colour == "#cead21"){
      document.body.style.backgroundColor = "rgba(206, 173, 33, 0.3)"
    }
    else if(state.shield.colour == "red"){
      document.body.style.backgroundColor = "rgba(255, 0, 0, 0.3)"
    }

  }

  const mouseInCentre = useCallback(e  => {
    isMouseCenteredRef.current = true
    console.log(isMouseCenteredRef.current)
  }, [])

  const mouseNotInCentre = useCallback(e  => {
    isMouseCenteredRef.current = false
    console.log(isMouseCenteredRef.current)
  }, [])
  
  useEffect(() => {
    generateShield()
    
}, [])

  useEffect(() => {
    window.addEventListener("keydown", openDeathBox)
    window.addEventListener("keydown", closeDeathBox)
    return () => {
      window.removeEventListener("keydown", openDeathBox)
      window.addEventListener("keydown", closeDeathBox)
    }
  }, [openDeathBox, closeDeathBox])

  return (
    <div>
      
      <OpenLootBoxScreenComponent wasShieldSwapped={wasShieldSwapped} isOpen={isOpen}></OpenLootBoxScreenComponent>
      
      {isOpen !== true ?
          <div onMouseEnter={mouseInCentre} onMouseOut={mouseNotInCentre} className="mouse-centering">

          </div>
                :null}

      {totalTime.current !== 0 && isOpen === false ? 
      
      <div className="shield-swap-time">
        <h2>Your shield swapping time: </h2>
        <h1>{totalTime.current} seconds</h1> 
      </div>
      
      : null}

      {isOpen === false ? null : 
      
          <div className="Deathbox-Container">
            <DeathBoxComponent 
            consumables={state.consumables} ammo={state.ammo} shield = {state.shield} 
            helmet = {state.helmet} backpack={state.backpack}
            knockdownShield={state.knockdownShield} doShieldSwap={doShieldSwap}>
            </DeathBoxComponent> 

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
      }

      

  </div>
  );
}

export default App;
