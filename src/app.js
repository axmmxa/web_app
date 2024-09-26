

import { server, PORT } from "./server"

server.listen(PORT, ()=> {
    console.log("Sever started")
})

console.log("App started")