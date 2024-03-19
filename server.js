// file initial network nodejs | khai bao port va khoi dong server

const app = require("./src/app");
const port = 3055;

const server = app.listen(port, () => {
    console.log(`WSV Ecommerce start with ${port}`);
});

process.on('SIGINT', () => {
    server.close( () => console.log('Exit server Express'));
    // khong su dung neu co thi chi su dung notify ...
}); 
