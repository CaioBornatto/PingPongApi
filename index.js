const express = require('express');
const ping_pongrouter = require('./src/ping_pong_route')
//const swaggerUi = require('swagger-ui-express')
//const swaggerFile = require('./swagger_output.json')


const app = express();
app.use(express.json());
app.use(ping_pongrouter);

//app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

let port = 3000

app.listen(port,()=>{
    console.log(`Api rodando na porta : ${port}`)
});