const express = require("express")
const fetch = require("node-fetch")
const path = require("path")
const fs = require("fs")
const PORT = process.env.PORT || 4000
const app = express()

app.get("/generateShield", async (req, res) => {
    
    await fs.readFile("../src/Apex-Equipment.json", "utf-8", (err, data) => {

    if (err) throw err
    let array = JSON.parse(data)

    var id = Math.floor(Math.random() * 5);
    var idHelmet = Math.floor(Math.random() * 4);
    var idBackpack = Math.floor(Math.random() * 4);
    var idKnockdownShield = Math.floor(Math.random() * 4);

    var obj = {
        "shield" : array["Armor"][id],
        "helmet" : array["Helmet"][idHelmet],
        "backpack" : array["Backpack"][idBackpack],
        "knockdownShield" : array["KnockdownShield"][idKnockdownShield],
        "ammo" : array["Ammo"],
        "consumables" : array["Consumables"]

    }

    res.json(obj)
    })
})

app.listen(PORT, () =>{
    console.log(`server is live on port: ${PORT}`)
    
})
