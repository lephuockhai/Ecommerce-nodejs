// // file initial network nodejs | khai bao port va khoi dong server

const app = require("./src/app")    
port = process.env.port

// khai bao server se lang nghe port 3055 khi ket noi duoc voi port 3055 thi no se duoc tra ve ham callback () => {...}
const server = app.listen(port, () => {
    console.log(`web server is running on port ${port}`)
})

//dung khi ctrl + c thi se khong ket noi nua
process.on('SIGINT', ()=> {
    server.close( ()=> console.log("exit server express"))
    process.exit()
})
