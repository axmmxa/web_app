

import { server, PORT } from "./server"

server.listen(PORT, ()=> {
    console.log("Sever started")
})

console.log("App started")


//Routes 
server.get("/", (req, res) => {
    res.send("Main Route")
})