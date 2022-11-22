const express = require('express');
const router = new express.Router();


router.post('/pingPong/:parametro',async(req,res)=>{
    let parametro = req.params.parametro;
        try {
            if(parametro == 'Pong' || parametro == 'pong'){
                res.status(200).send('Ping!');
            } else if (parametro == 'Ping' || parametro == 'ping'){
                res.status(200).send('Pong!');
            } else {
                res.send(400).send();
            }
        } catch (error) {
            res.send(400).send(' ' + error)
        }
});


module.exports = router;