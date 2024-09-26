

import { server, PORT } from "./server"

server.listen(PORT, ()=> {
    console.log("Sever started")
})

console.log("App started")

//404 Handler 
server.use( (req, res) => {
    res.status(404).json({
        status:"Seite existiert nicht! 404 Error"
    })
})

//Routes 
server.get("/", (req, res) => {
    res.send("Main Route")
})

server.get("/profile", (req, res) =>{
    res.send("Profile Route")
})