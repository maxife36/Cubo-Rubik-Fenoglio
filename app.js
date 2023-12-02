const express = require("express")
const path = require("path")

const app = express()

const pathPublic = path.resolve("public")

app.use(express.static(pathPublic))

const PORT = process.env.PORT || 3000

//---Paths---

const pathHome = path.resolve("views", "home.html") 
const pathListenersDesktop = path.resolve("js", "listeners-desktop.js") 
const pathListenersMobile = path.resolve("js", "listeners-mobile.js") 
const pathFunctions = path.resolve("js", "functions.js") 
const pathControlsSettings = path.resolve("js", "config-data", "controls-settings.js") 
const pathDefaultPositions = path.resolve("js", "config-data", "default-positions.js") 
const pathDragMovements = path.resolve("js", "config-data", "drag-movements.js") 

//----Peticiones CRUD----

app.get("/", (req,res) => res.sendFile(pathHome))
app.get("/js/listeners-desktop", (req,res) => res.sendFile(pathListenersDesktop))
app.get("/js/listeners-mobile", (req,res) => res.sendFile(pathListenersMobile))
app.get("/js/functions", (req,res) => res.sendFile(pathFunctions))
app.get("/js/controls-settings", (req,res) => res.sendFile(pathControlsSettings))
app.get("/js/default-positions", (req,res) => res.sendFile(pathDefaultPositions))
app.get("/js/drag-movements", (req,res) => res.sendFile(pathDragMovements))



app.listen(PORT, () =>{
    console.log(`Se conecto Correctamnete a 
    http://localhost:${PORT}`);
})