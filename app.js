require('dotenv').config(); //Manejo variables de entorno
const Server = require('./models/server');



 
const server = new Server();

server.listen();
