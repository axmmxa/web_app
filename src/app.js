

import { server, PORT } from "./server"

server.listen(PORT, ()=> {
    console.log("Sever started")
})

console.log("App started")



//Routes 
server.get("/", (req, res) => {
    res.send("Main Route")
})



server.get("/profile", (req, res) =>{
    res.send("Profile Route")
    console.log(req.query)
})


server.get("/profile/:userid", (req, res) =>{
    console.log(req.params.userid)
    res.send("Profile Route")
})


//404 Handler 
server.use( (req, res) => {
    res.status(404).json({
        status:"Seite existiert nicht! 404 Error"
    })
})